import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { AngmaterialModule } from "../ang-material.module";
import { PopupmodalyesnoComponent } from "./dialogs/popupmodalyesno/popupmodalyesno.component";
import { PopupmodalokonlyComponent } from "./dialogs/popupmodalokonly/popupmodalokonly.component";
import { FileselectdialogComponent } from "./dialogs/fileselectdialog/fileselectdialog.component";
import { FormsModule } from "@angular/forms";
import { DropzoneDirective } from "./dialogs/fileselectdialog/dropzone.directive";
import { UploadtaskComponent } from "./dialogs/fileselectdialog/uploadtask/uploadtask.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PopupmodalyesnoComponent,
    PopupmodalokonlyComponent,
    FileselectdialogComponent,
    DropzoneDirective,
    UploadtaskComponent
  ],
  imports: [CommonModule, RouterModule, AngmaterialModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PopupmodalyesnoComponent,
    PopupmodalokonlyComponent,
    FileselectdialogComponent,
    DropzoneDirective,
    UploadtaskComponent
  ],
  entryComponents: [FileselectdialogComponent]
})
export class SharedModule {}
