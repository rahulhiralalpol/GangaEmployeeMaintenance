import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { AngularFireStorage } from "@angular/fire/storage";

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

import { FireUser } from "./fire-user";
import { MatspinnerService } from "./matspinner.service";

@Injectable({
  providedIn: "root"
})
export class FirebaseauthService {
  // user: FireUser;
  user$: Observable<FireUser>;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    public router: Router,
    private spinnerservice: MatspinnerService
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          // Logged in
          return this.afs.doc<FireUser>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  public updateUserData(user) {
    // Sets user data to firestore on registration
    const userRef: AngularFirestoreDocument<FireUser> = this.afs.doc(
      `users/${user.uid}`
    );
    let data;
    if (user.gender === undefined && user.dob === undefined) {
      data = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        gender: null,
        dob: null
      };
    } else {
      data = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        gender: user.gender,
        dob: user.dob
      };
    }
    return userRef.set(data, { merge: true });
  }

  async GetProfileDetails(uid) {
    const doc = await this.afs.firestore.doc(`users/${uid}`).get();
    return doc;
  }

  async login(email: string, password: string) {
    const credential = await this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
    return credential;
  }

  async register(email: string, password: string) {
    const credential = await this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return this.updateUserData(credential.user);
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification();
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  async logout() {
    await this.afAuth.auth.signOut();
  }

  async loginWithGoogle() {
    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  startUpload(file) {
    this.spinnerservice.showSpinner();
    // File Name equals User.uid
    const photoid = this.afAuth.auth.currentUser.uid;
    // The storage path with file name
    const path = `profilephotos/${photoid}`;
    // Reference to storage bucket
    const ref = this.storage.ref(path);
    // The main task
    this.storage.upload(path, file).then(() => {
      ref
        .getDownloadURL()
        .toPromise()
        .then(downloadURL => {
          this.afAuth.auth.currentUser.updateProfile({ photoURL: downloadURL });
          const user = this.afAuth.auth.currentUser;
          const userRef: AngularFirestoreDocument<FireUser> = this.afs.doc(
            `users/${user.uid}`
          );
          const data = {
            uid: user.uid,
            email: user.email,
            photoURL: downloadURL
          };
          return userRef.set(data, { merge: true });
        });
      this.spinnerservice.stopSpinner();
    });
  }
}
