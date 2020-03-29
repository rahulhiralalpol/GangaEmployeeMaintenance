import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { FirebaseauthService } from "src/app/services/firebaseauth.service";
import {
  Dimensions,
  ImageCroppedEvent,
  ImageTransform
} from "ngx-image-cropper";
import { base64ToFile } from "ngx-image-cropper";

@Component({
  selector: "app-fileselectdialog",
  templateUrl: "./fileselectdialog.component.html",
  styleUrls: ["./fileselectdialog.component.scss"]
})
export class FileselectdialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FileselectdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedfile,
    private firebaseauthservice: FirebaseauthService
  ) {}

  isHovering: boolean;
  files: File[] = [];
  imgURL: any;

  hasImage: boolean = false;
  imageChangedEvent: any = "";
  droppedImage: any = "";
  croppedImage: any = "";
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};

  ngOnInit(): void {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(inputfiles: FileList) {
    if (inputfiles.length !== 0) {
      for (let i = 0; i < inputfiles.length; i++) {
        this.files.push(inputfiles.item(i));
      }
      const mimeType = this.files[0].type;
      if (mimeType.match(/image\/*/) !== null) {
        const reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.onload = event => {
          this.droppedImage = reader.result;
          this.hasImage = true;
        };
      }
    }
  }
  // onDrop(inputfiles: FileList) {
  //   for (let i = 0; i < inputfiles.length; i++) {
  //     this.files.push(inputfiles.item(i));
  //   }
  //   this.preview(inputfiles);
  // }

  // preview(inputfiles: FileList) {
  //   if (inputfiles.length !== 0) {
  //     for (let i = 0; i < inputfiles.length; i++) {
  //       this.files.push(inputfiles.item(i));
  //     }
  //     const mimeType = this.files[0].type;
  //     if (mimeType.match(/image\/*/) !== null) {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(this.files[0]);
  //       reader.onload = event => {
  //         this.imgURL = reader.result;
  //       };
  //     }
  //   }
  // }

  onNoClick(): void {
    this.dialogRef.close();
  }

  CropAndUploadFile() {
    this.firebaseauthservice.startUpload(this.croppedImage);
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.hasImage = true;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = base64ToFile(event.base64);
  }

  imageLoaded() {
    this.showCropper = true;
  }
}
