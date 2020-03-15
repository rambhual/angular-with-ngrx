import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isCollapsed = false;
  constructor(private readonly title: Title) {
    this.title.setTitle("Welcome page");
  }
}
