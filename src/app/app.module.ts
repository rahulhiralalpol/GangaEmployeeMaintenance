import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "../environments/environment.prod";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { SharedModule } from "./shared/shared.module";
import { ComponentsModule } from "./components/components.module";
import { AngmaterialModule } from "./ang-material.module";
import { FirebaseauthService } from "./services/firebaseauth.service";
import { FirebasedataService } from "./services/firebasedata.service";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FireauthGuard } from "./fireauth.guard";
import { GeneralService } from "./services/general.service";
import { AngularFireStorage } from "@angular/fire/storage";

import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ComponentsModule,
    AngmaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    FirebaseauthService,
    FirebasedataService,
    FireauthGuard,
    GeneralService,
    AngularFireStorage,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
