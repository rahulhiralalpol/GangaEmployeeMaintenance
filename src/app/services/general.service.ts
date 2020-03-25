import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class GeneralService {
  constructor(private snack: MatSnackBar) {}

  openSnackBar(message: string, action?: string) {
    this.snack.open(message, action, {
      duration: 3000
    });
  }
}
