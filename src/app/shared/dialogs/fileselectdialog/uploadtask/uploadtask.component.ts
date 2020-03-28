import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { FirebaseauthService } from "src/app/services/firebaseauth.service";

@Component({
  selector: "app-uploadtask",
  templateUrl: "./uploadtask.component.html",
  styleUrls: ["./uploadtask.component.scss"]
})
export class UploadtaskComponent implements OnInit {
  @Input() file: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private firebaseauthservice: FirebaseauthService
  ) {}

  ngOnInit(): void {
    this.startUpload();
  }

  startUpload() {
    // File Name equals User.uid
    const photoid = this.firebaseauthservice.afAuth.auth.currentUser.uid;

    // The storage path with file name
    const path = `profilephotos/${photoid}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(),
      // tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        console.log(this.downloadURL);
      })
    );
  }

  isActive(snapshot) {
    return (
      snapshot.state === "running" &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
}
