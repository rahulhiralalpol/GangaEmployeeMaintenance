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
}
