import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { merge, mergeMap, catchError } from "rxjs/operators";

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions) {}
}
