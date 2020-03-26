import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FirebaseauthService } from "../../services/firebaseauth.service";
import { ValidatePassword } from "../../custom_validators/validate-passwords";
import { GeneralService } from "src/app/services/general.service";

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
  }

  hide = true;
  hideoldpassword = true;
  currentUser;

  profileForm = this.fb.group({
    displayname: new FormControl(),
    email: new FormControl()
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

  onSubmit() {
    const email = this.firebaseauthservice.afAuth.auth.currentUser.email;
    const oldpassword = this.passwordForm.controls.oldpassword.value;
    const newpassword = this.passwordForm.controls.password.value;
    this.firebaseauthservice
      .login(email, oldpassword)
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
}
