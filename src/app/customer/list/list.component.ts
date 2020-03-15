import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  constructor(private readonly title: Title) {
    this.title.setTitle("DNI | Customer List");
  }

  ngOnInit() {}
}
