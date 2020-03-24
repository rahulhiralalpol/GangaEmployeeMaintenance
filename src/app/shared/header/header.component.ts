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

  isLoggedIn;

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
    private firebaseauthservice: FirebaseauthService
  ) {
    this.firebaseauthservice.loggedStatus.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  ngOnInit(): void {}

  ChangeTheme(selectedTheme) {
    this.themeChangedEvent.emit(selectedTheme);
    this.SelectedThemeIndicator = selectedTheme;
  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
    console.log(this.getCurrentUser());
  }

  Logout() {
    this.firebaseauthservice.logout();
    this.firebaseauthservice.loggedStatus.next(false);
    this.router.navigate(["/login"]);
  }

  showDisplayName() {
    if (this.isLoggedIn) {
      const user = this.getCurrentUser();
      if (user.displayName == null) {
        return user.email;
      } else {
        return user.displayName;
      }
    }
  }
  showEmail() {
    if (this.isLoggedIn) {
      const user = this.getCurrentUser();
      return user.email;
    }
  }
  getCurrentUser() {
    return this.firebaseauthservice.getLoggedUser();
  }
}
