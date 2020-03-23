import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FirebaseauthService } from "../../services/firebaseauth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: FirebaseauthService
  ) {}

  hide = true;
  loginForm = this.fb.group({
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
      validators: [Validators.required],
      updateOn: "change"
    })
  });

  ngOnInit(): void {}

  ChangeState() {
    this.router.navigate(["/register"]);
  }

  ForgotPassword() {
    this.router.navigate(["/forgotpassword"]);
  }

  onSubmit() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    this.authService.login(email, password);
  }

  getEmailErrorMessage() {
    if (this.loginForm.controls.email.hasError("required")) {
      return "You must enter a value";
    }
    return this.loginForm.controls.email.hasError("pattern")
      ? "Not a valid email"
      : "";
  }

  getPasswordErrorMessage() {
    if (this.loginForm.controls.password.hasError("required")) {
      return "You must enter a value";
    } else {
      return "";
    }
  }
}
