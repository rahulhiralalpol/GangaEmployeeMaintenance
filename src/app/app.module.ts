import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { SharedModule } from "./shared/shared.module";
import { ComponentsModule } from "./components/components.module";
import { AngmaterialModule } from "./ang-material.module";
import { FirebaseauthService } from "./services/firebaseauth.service";

const config = {
  apiKey: "AIzaSyDUjFC1My4yNrsQayxlGzTdUEN8dHuta6M",
  authDomain: "gangaemployeemaintenance.firebaseapp.com",
  databaseURL: "https://gangaemployeemaintenance.firebaseio.com",
  projectId: "gangaemployeemaintenance",
  storageBucket: "gangaemployeemaintenance.appspot.com",
  messagingSenderId: "349588553046",
  appId: "1:349588553046:web:4f313bc56d6d2d098c2af7"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ComponentsModule,
    AngmaterialModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [FirebaseauthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
