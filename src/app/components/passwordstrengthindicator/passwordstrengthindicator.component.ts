import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-passwordstrengthindicator",
  templateUrl: "./passwordstrengthindicator.component.html",
  styleUrls: ["./passwordstrengthindicator.component.scss"]
})
export class PasswordstrengthindicatorComponent implements OnInit, OnChanges {
  @Input() password: string;
  @Input() minLength: number = 8;
  @Output() strengthChange = new EventEmitter<number>();
  public strengthText: string = "";
  public score: number = 0;
  public feedbackArr: Array<Object> = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.password) {
      this.checkStrength();
    }
  }

  checkStrength() {
    this.feedbackArr = [];
    this.score = 0;
    this.score = this.isBlank() ? this.score : this.score;
    this.score = this.isLengthMet() ? this.score + 1 : this.score;
    this.score = this.isSpecialCharacterMet() ? this.score + 1 : this.score;
    this.score = this.isNumberMet() ? this.score + 1 : this.score;
    this.score = this.isLowerCaseMet() ? this.score + 1 : this.score;
    this.score = this.isUpperCaseMet() ? this.score + 1 : this.score;
    this.getStrengthText();
  }

  isBlank() {
    if (this.password.length > 0) {
      this.feedbackArr.push({
        label: "Not Blank",
        status: true
      });
      return true;
    } else {
      this.feedbackArr.push({
        label: "Not Blank",
        status: false
      });
      return false;
    }
  }

  isLengthMet() {
    if (this.password.length >= this.minLength) {
      this.feedbackArr.push({
        label: `Minimum ${this.minLength} Characters`,
        status: true
      });
      return true;
    } else {
      this.feedbackArr.push({
        label: `Minimum ${this.minLength} Characters`,
        status: false
      });
      return false;
    }
  }

  isSpecialCharacterMet() {
    if (/[!@#$%*]/.test(this.password)) {
      this.feedbackArr.push({
        label: "One Special Character",
        status: true
      });
      return true;
    } else {
      this.feedbackArr.push({
        label: "One Special Character",
        status: false
      });
      return false;
    }
  }

  isNumberMet() {
    if (/[0-9]/.test(this.password)) {
      this.feedbackArr.push({
        label: "One Number",
        status: true
      });
      return true;
    } else {
      this.feedbackArr.push({
        label: "One Number",
        status: false
      });
      return false;
    }
  }

  isLowerCaseMet() {
    if (/[a-z]/.test(this.password)) {
      this.feedbackArr.push({
        label: "One Lowercase Character",
        status: true
      });
      return true;
    } else {
      this.feedbackArr.push({
        label: "One Lowercase Character",
        status: false
      });
      return false;
    }
  }

  isUpperCaseMet() {
    if (/[A-Z]/.test(this.password)) {
      this.feedbackArr.push({
        label: "One Uppercase Character",
        status: true
      });
      return true;
    } else {
      this.feedbackArr.push({
        label: "One Uppercase Character",
        status: false
      });
      return false;
    }
  }

  getStrengthText() {
    this.strengthText = "";
    switch (this.score) {
      case 1:
        this.strengthText = "Too Short";
        break;
      case 2:
        this.strengthText = "Weak";
        break;
      case 3:
        this.strengthText = "Fair";
        break;
      case 4:
        this.strengthText = "Good";
        break;
      case 5:
        this.strengthText = "Strong";
        break;
    }
  }
}
