import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ValidatePassword } from "../../custom_validators/validate-passwords";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder) {
    this.checkMode();
  }

  hide = true;
  registermode = false;
  loginForm;

  ngOnInit(): void {
    document.getElementById("email").focus();
  }

  ChangeState() {
    this.registermode = !this.registermode;
    this.loginForm.reset();
    this.loginForm.clearValidators();
    this.checkMode();
    document.getElementById("email").focus();
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

  checkMode() {
    if (this.registermode) {
      const loginForm = this.fb.group(
        {
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
      this.loginForm = loginForm;
    } else {
      const loginForm = this.fb.group({
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
        })
      });
      this.loginForm = loginForm;
    }
  }
}
