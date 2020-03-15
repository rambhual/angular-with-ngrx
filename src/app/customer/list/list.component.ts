import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Store } from "@ngrx/store";
import { CustomerActionTypes } from "../state/customer.actions";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  constructor(
    private readonly title: Title,
    private readonly store: Store<any>
  ) {
    this.title.setTitle("DNI | Customer List");
  }

  ngOnInit() {
    this.store.dispatch({ type: CustomerActionTypes.LOAD_CUSTOMERS });
    this.store.subscribe(res => console.log(res));
  }
}
