import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { MatDialog } from "@angular/material/dialog";
import { PopupmodalokonlyComponent } from "../shared/dialogs/popupmodalokonly/popupmodalokonly.component";
import { FileselectdialogComponent } from "../shared/dialogs/fileselectdialog/fileselectdialog.component";

export interface OKOnlyDialogData {
  name: string;
  message: string;
}

@Injectable({
  providedIn: "root"
})
export class GeneralService {
  constructor(private snack: MatSnackBar, public dialog: MatDialog) {}

  openSnackBar(message: string, action?: string) {
    this.snack.open(message, action, {
      duration: 3000
    });
  }

  openOKOnlyDialog(inputData: OKOnlyDialogData) {
    const dialogRef = this.dialog.open(PopupmodalokonlyComponent, {
      width: "450px",
      data: inputData
    });
  }

  openFileDialog() {
    const dialogRef = this.dialog.open(FileselectdialogComponent, {
      width: "450px"
    });
    return dialogRef.afterClosed();
  }
}
