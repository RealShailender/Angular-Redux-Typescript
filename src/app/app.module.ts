import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { Counter } from './actions/counter.action';
 /* Routing Module */
import { routing }     from './app.routing';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    StoreModule.provideStore({ counterReducer })
  ],
  providers: [Counter],
  bootstrap: [AppComponent]
})
export class AppModule { }
