import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FirebaseauthService } from "../../services/firebaseauth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();
  @Output() themeChangedEvent: EventEmitter<string> = new EventEmitter();
  SelectedThemeIndicator = "GangaLightTheme1";

  themes: any[] = [
    {
      ThemeGroup: "Light Themes",
      Details: [
        { name: "BlueGrey Cyan", theme: "GangaLightTheme1" },
        { name: "DeepPurple Amber", theme: "DeepPurpleAmberLightTheme" },
        { name: "Indigo Pink", theme: "IndigoPinkLightTheme" }
      ]
    },
    {
      ThemeGroup: "Dark Themes",
      Details: [
        { name: "Dark Grey", theme: "GangaDarkTheme1" },
        { name: "Pink Blue", theme: "PinkBlueGreyDarkTheme" },
        { name: "Purple Green", theme: "PurpleGreenDarkTheme" }
      ]
    }
  ];

  constructor(
    private router: Router,
    public firebaseauthservice: FirebaseauthService
  ) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

  ChangeTheme(selectedTheme) {
    this.themeChangedEvent.emit(selectedTheme);
    this.SelectedThemeIndicator = selectedTheme;
  }

  Logout() {
    this.firebaseauthservice.logout();
    this.router.navigate(["/login"]);
  }

  showDisplayName() {
    const currentUser = this.firebaseauthservice.afAuth.auth.currentUser;
    if (currentUser != null) {
      if (currentUser.displayName == null) {
        return currentUser.email;
      } else {
        return currentUser.displayName;
      }
    }
  }

  showEmail() {
    const currentUser = this.firebaseauthservice.afAuth.auth.currentUser;
    if (currentUser != null) {
      return currentUser.email;
    }
  }

  displayImage() {
    const currentUser = this.firebaseauthservice.afAuth.auth.currentUser;
    if (currentUser != null) {
      if (currentUser.photoURL == null) {
        return "https://material.angular.io/assets/img/examples/shiba2.jpg";
      } else {
        return currentUser.photoURL;
      }
    }
  }
}
