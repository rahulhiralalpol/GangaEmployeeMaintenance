import { Component, OnInit, Output, EventEmitter } from "@angular/core";

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
        { name: "Light Theme 1", theme: "GangaLightTheme1" },
        { name: "Light Theme 2", theme: "DeepPurpleAmberLightTheme" },
        { name: "Light Theme 3", theme: "IndigoPinkLightTheme" }
      ]
    },
    {
      ThemeGroup: "Dark Themes",
      Details: [
        { name: "Dark Theme 1", theme: "GangaDarkTheme1" },
        { name: "Dark Theme 2", theme: "PinkBlueGreyDarkTheme" },
        { name: "Dark Theme 3", theme: "PurpleGreenDarkTheme" }
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  ChangeTheme(selectedTheme) {
    this.themeChangedEvent.emit(selectedTheme);
    this.SelectedThemeIndicator = selectedTheme;
  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
}
