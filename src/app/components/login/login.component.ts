import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor() {}

  registermode = false;

  ngOnInit(): void {}

  ChangeState() {
    this.registermode = !this.registermode;
    if (this.registermode) {
      document.getElementById("LoginButton").innerText = "R E G I S T E R";
      document.getElementById("StateButton").innerText =
        "Already a User ? ..... Click here to Login.....";
      document.getElementById("StateIcon").innerText = "edit";
    } else {
      document.getElementById("LoginButton").innerText = "L O G I N";
      document.getElementById("StateButton").innerText =
        "New User ? ..... Click here to Register.....";
      document.getElementById("StateIcon").innerText = "vpn_key";
    }
  }

  DoProcess() {
    if (this.registermode) {
      console.log("Do Registration");
    } else {
      console.log("Do Login");
    }
  }
}
