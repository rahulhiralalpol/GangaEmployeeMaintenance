import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ValidatePassword } from "../../custom_validators/validate-passwords";
import { FirebaseauthService } from "../../services/firebaseauth.service";
import { GeneralService } from "src/app/services/general.service";
import { MatspinnerService } from "src/app/services/matspinner.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private firebaseauthservice: FirebaseauthService,
    private generalservice: GeneralService,
    private spinnerservice: MatspinnerService
  ) {}

  hide = true;
  loginForm = this.fb.group(
    {
      displayname: new FormControl("", {
        validators: [Validators.required],
        updateOn: "change"
      }),
      email: new FormControl("", {
        validators: [
          Validators.required,
          Validators.pattern(
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
          )
        ],
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
      validators: ValidatePassword.MatchPassword
    }
  );

  ngOnInit(): void {}

  ChangeState() {
    this.router.navigate(["/login"]);
  }

  onSubmit() {
    this.spinnerservice.showSpinner();
    const displayname = this.loginForm.controls.displayname.value;
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    this.firebaseauthservice
      .register(email, password)
      .then(() => {
        this.firebaseauthservice.afAuth.auth.currentUser
          .updateProfile({
            displayName: displayname
          })
          .then(() => {
            const user = this.firebaseauthservice.afAuth.auth.currentUser;
            const data = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              gender: null,
              dob: null
            };
            return this.firebaseauthservice.updateUserData(data);
          });
        this.spinnerservice.stopSpinner();
        this.router.navigate(["/dashboard"]);
        this.generalservice.openSnackBar(
          "Registered and Logged in Successfully"
        );
      })
      .catch(e => {
        this.spinnerservice.stopSpinner();
        this.generalservice.openSnackBar("Registration Failed : " && e.message);
      });
  }

  getDisplayNameMessage() {
    if (this.loginForm.controls.email.hasError("required")) {
      return "You must enter a value";
    } else {
      return "";
    }
  }
  getEmailErrorMessage() {
    if (this.loginForm.controls.email.hasError("required")) {
      return "You must enter a value";
    }
    return this.loginForm.controls.email.hasError("pattern")
      ? "Not a valid email"
      : "";
  }
  getConfPasswordErrorMessage() {
    if (this.loginForm.controls.confpassword.hasError("required")) {
      return "You must enter a value";
    } else if (
      this.loginForm.controls.confpassword.hasError("passwordnotmatch")
    ) {
      return "Password does not match";
    } else {
      return "";
    }
  }
}
