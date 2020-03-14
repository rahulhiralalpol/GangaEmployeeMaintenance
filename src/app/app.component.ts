import { Component, Renderer2, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    this.renderer.setAttribute(this.document.body, "class", this.MyThemeClass);
  }

  sidebarOpen = true;
  MyThemeClass = "GangaDarkTheme1";

  themeChanger(ChangedTheme) {
    this.MyThemeClass = ChangedTheme;
    this.renderer.setAttribute(this.document.body, "class", this.MyThemeClass);
  }

  sidebarToggler($event) {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
