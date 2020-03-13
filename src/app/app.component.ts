import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  sidebarOpen = true;
  MyThemeClass = "GangaDarkTheme1";

  sidebarToggler($event) {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
