import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {
    this.checkMode();
  }

  hide = true;
  registermode = false;
  loginForm;

  ngOnInit(): void {}

  ChangeState() {
    this.registermode = !this.registermode;
    this.loginForm.reset();
    this.loginForm.clearValidators();
    this.checkMode();
  }

  onSubmit() {
    if (this.registermode) {
      this.router.navigate(["/employeeslist"]);
    } else {
      this.router.navigate(["/dashboard"]);
    }
  }

  getEmailErrorMessage() {
    if (this.loginForm.controls.email.hasError("required")) {
      return "You must enter a value";
    }
    return this.loginForm.controls.email.hasError("email")
      ? "Not a valid email"
      : "";
  }
  getPasswordErrorMessage() {
    if (this.loginForm.controls.password.hasError("required")) {
      return "You must enter a value";
    } else if (this.loginForm.controls.password.hasError("minlength")) {
      return "Minimum 8 characters";
    } else if (this.loginForm.controls.password.hasError("maxlength")) {
      return "Maximum 20 characters";
    } else {
      return "";
    }
  }

  getConfPasswordErrorMessage() {
    if (this.loginForm.controls.confpassword.hasError("required")) {
      return "You must enter a value";
    } else if (this.loginForm.controls.confpassword.hasError("minlength")) {
      return "Minimum 8 characters";
    } else if (this.loginForm.controls.confpassword.hasError("maxlength")) {
      return "Maximum 20 characters";
    } else {
      return "";
    }
  }

  checkMode() {
    if (this.registermode) {
      const loginForm = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]),
        confpassword: new FormControl("", [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ])
      });
      this.loginForm = loginForm;
    } else {
      const loginForm = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ])
      });
      this.loginForm = loginForm;
    }
  }
}
