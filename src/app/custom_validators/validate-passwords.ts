import { AbstractControl } from "@angular/forms";
export class ValidatePassword {
  static MatchPassword(fc: AbstractControl) {
    const password = fc.get("password").value;
    const confirmPassword = fc.get("confpassword").value;
    if (password !== confirmPassword) {
      fc.get("confpassword").setErrors({
        passwordnotmatch: true
      });
    } else {
      return null;
    }
  }
  static OldNewEqualCheck(fc: AbstractControl) {
    const oldPassword = fc.get("oldpassword").value;
    const password = fc.get("password").value;
    if (oldPassword !== "" && password !== "") {
      if (password !== oldPassword) {
        return null;
      } else {
        fc.get("password").setErrors({
          oldnewmatch: true
        });
      }
    }
  }
}
