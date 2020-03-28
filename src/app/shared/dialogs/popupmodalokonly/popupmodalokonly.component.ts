import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface OKOnlyDialogData {
  name: string;
  message: string;
}

@Component({
  selector: "app-popupmodalokonly",
  templateUrl: "./popupmodalokonly.component.html",
  styleUrls: ["./popupmodalokonly.component.scss"]
})
export class PopupmodalokonlyComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PopupmodalokonlyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OKOnlyDialogData
  ) {}

  ngOnInit(): void {}
}
