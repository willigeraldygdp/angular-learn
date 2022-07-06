import {CounterComponent} from "./counter.component";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./counter.reducer";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [CounterComponent],
  imports: [StoreModule.forFeature('Counter', counterReducer), CommonModule]
})
export class CounterModule {}
