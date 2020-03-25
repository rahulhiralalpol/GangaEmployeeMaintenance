import { Component, Renderer2, Inject, OnInit, Output } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { FirebaseauthService } from "./services/firebaseauth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private firebaseauthservice: FirebaseauthService
  ) {
    this.renderer.setAttribute(this.document.body, "class", this.MyThemeClass);
  }

  sidebarOpen = true;

  MyThemeClass = "GangaLightTheme1";

  themeChanger(ChangedTheme) {
    this.MyThemeClass = ChangedTheme;
    this.renderer.setAttribute(this.document.body, "class", this.MyThemeClass);
  }

  sidebarToggler($event) {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit(): void {}
}
