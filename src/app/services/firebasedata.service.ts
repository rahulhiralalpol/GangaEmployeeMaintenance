import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class FirebasedataService {
  constructor(private firestore: AngularFirestore) {}

  AddNewEmployee(data) {
    this.firestore
      .collection("employees")
      .add(data)
      .catch(error => {
        console.log(error);
      })
      .then(response => {
        console.log(response);
      });
  }
}
