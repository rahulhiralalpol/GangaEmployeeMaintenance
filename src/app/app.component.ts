import {
  Component,
  Renderer2,
  Inject,
  OnInit,
  ViewChild,
  HostListener
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { FirebaseauthService } from "./services/firebaseauth.service";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("sidenav") sidenav: MatSidenav;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private firebaseauthservice: FirebaseauthService
  ) {
    this.renderer.setAttribute(this.document.body, "class", this.MyThemeClass);
    setTimeout(() => {
      this.sidebarOpen = false;
    }, 2000);
  }

  sidebarOpen = true;
  MyThemeClass = "GangaLightTheme1";

  @HostListener("window:keyup", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.code === "Escape") {
      this.sidebarOpen = false;
    }
  }

  themeChanger(ChangedTheme) {
    this.MyThemeClass = ChangedTheme;
    this.renderer.setAttribute(this.document.body, "class", this.MyThemeClass);
  }

  sidebarToggler($event) {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit(): void {}
}
