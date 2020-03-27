import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FirebaseauthService } from "../../services/firebaseauth.service";
import { ValidatePassword } from "../../custom_validators/validate-passwords";
import { GeneralService } from "src/app/services/general.service";
import { auth } from "firebase/app";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { FireUser } from "../../services/fire-user";

@Component({
  selector: "app-editprofile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.scss"]
})
export class EditprofileComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private firebaseauthservice: FirebaseauthService,
    private generalservice: GeneralService
  ) {
    this.currentUser = this.firebaseauthservice.afAuth.auth.currentUser;
    this.LoadProfileDetails();
  }

  hide = true;
  hideoldpassword = true;
  currentUser;

  profileForm = this.fb.group({
    displayName: new FormControl(""),
    photoURL: new FormControl(""),
    gender: new FormControl(""),
    dob: new FormControl("")
  });

  passwordForm = this.fb.group(
    {
      oldpassword: new FormControl("", {
        validators: [Validators.required],
        updateOn: "change"
      }),
      password: new FormControl("", {
        validators: [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
          )
        ],
        updateOn: "change"
      }),
      confpassword: new FormControl("", {
        validators: [Validators.required],
        updateOn: "change"
      })
    },
    {
      validators: [
        ValidatePassword.MatchPassword,
        ValidatePassword.OldNewEqualCheck
      ]
    }
  );

  ngOnInit(): void {}

  LoadProfileDetails() {
    this.firebaseauthservice
      .GetProfileDetails(this.currentUser.uid)
      .then(doc => {
        this.profileForm.controls.displayName.setValue(doc.data().displayName);
        this.profileForm.controls.gender.setValue(doc.data().gender);
        this.profileForm.controls.dob.setValue(doc.data().dob.toDate());
      })
      .catch(e => {
        console.log(e.meesage);
      });
  }

  onChangeProfileDetails() {
    const user: FireUser = {
      uid: this.currentUser.uid,
      email: this.currentUser.email,
      photoURL: this.profileForm.controls.photoURL.value,
      displayName: this.profileForm.controls.displayName.value,
      gender: this.profileForm.controls.gender.value,
      dob: this.profileForm.controls.dob.value
    };
    const profile = {
      photoURL: this.profileForm.controls.photoURL.value,
      displayName: this.profileForm.controls.displayName.value
    };
    this.firebaseauthservice.updateUserData(user);
    this.firebaseauthservice.afAuth.auth.currentUser.updateProfile(profile);
    this.generalservice.openSnackBar(
      "Profile details updated successfully...."
    );
  }

  onSubmit() {
    const email = this.firebaseauthservice.afAuth.auth.currentUser.email;
    const oldpassword = this.passwordForm.controls.oldpassword.value;
    const newpassword = this.passwordForm.controls.password.value;
    const credential = auth.EmailAuthProvider.credential(email, oldpassword);
    this.firebaseauthservice.afAuth.auth.currentUser
      .reauthenticateWithCredential(credential)
      .then(() => {
        this.firebaseauthservice.afAuth.auth.currentUser
          .updatePassword(newpassword)
          .then(() => {
            this.generalservice.openSnackBar("Password changed Successfully");
          })
          .catch(error => {
            this.generalservice.openSnackBar(error.message);
          });
      })
      .catch(e => {
        this.generalservice.openSnackBar("Wrong Credentials " && e.message);
      });
  }

  displayImage() {
    const currentUser = this.firebaseauthservice.afAuth.auth.currentUser;
    if (currentUser != null) {
      if (currentUser.photoURL == null) {
        return "assets/icons/usericon.png";
      } else {
        return currentUser.photoURL;
      }
    }
  }

  getOldPasswordErrorMessage() {
    if (this.passwordForm.controls.confpassword.hasError("required")) {
      return "You must enter a value";
    } else {
      return "";
    }
  }
  getNewPasswordErrorMessage() {
    if (this.passwordForm.controls.password.hasError("oldnewmatch")) {
      return "New password should not be equal to Old one";
    } else {
      return "";
    }
  }
  NewPasswordHasError() {
    if (this.passwordForm.controls.password.hasError("oldnewmatch")) {
      return true;
    } else {
      return false;
    }
  }
  getConfPasswordErrorMessage() {
    if (this.passwordForm.controls.confpassword.hasError("required")) {
      return "You must enter a value";
    } else if (
      this.passwordForm.controls.confpassword.hasError("passwordnotmatch")
    ) {
      return "Password does not match";
    } else {
      return "";
    }
  }

  clearProfileForm() {
    this.passwordForm.patchValue({
      oldpassword: "",
      password: "",
      confpassword: ""
    });
    this.passwordForm.markAsUntouched();
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    if (tabChangeEvent.index == 1) {
      this.clearProfileForm();
    }
  };
}
