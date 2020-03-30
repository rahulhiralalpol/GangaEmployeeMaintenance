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

  ZoomIn() {
    this.scale += 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  ZoomOut() {
    this.scale -= 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  ResetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

  RotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }

  RotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }

  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH
    };
  }

  flipHorizontal() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH
    };
  }

  flipVertical() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV
    };
  }

  ClearImage() {
    this.hasImage = false;
    this.ResetImage();
  }
}
