import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromPostAction from "../state/post.actions";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  constructor(private readonly store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch({ type: fromPostAction.PostActionTypes.LOAD_POST });
    this.store.subscribe(res => console.log(res));
  }
}
