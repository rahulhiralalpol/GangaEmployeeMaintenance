import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();
  @Output() themeChangedEvent: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  ChangeTheme(selectedTheme) {
    this.themeChangedEvent.emit(selectedTheme);
  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
}
