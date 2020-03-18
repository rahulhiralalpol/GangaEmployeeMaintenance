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
