import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-fileselectdialog",
  templateUrl: "./fileselectdialog.component.html",
  styleUrls: ["./fileselectdialog.component.scss"]
})
export class FileselectdialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FileselectdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public filename
  ) {}

  isHovering: boolean;
  files: File[] = [];

  ngOnInit(): void {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
