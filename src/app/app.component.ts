import { Component } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add(this.MyThemeClass);
  }

  sidebarOpen = true;
  MyThemeClass = "GangaDarkTheme1";

  themeChanger(ChangedTheme) {
    this.MyThemeClass = ChangedTheme;
    this.overlayContainer
      .getContainerElement()
      .classList.add(this.MyThemeClass);
  }

  sidebarToggler($event) {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
