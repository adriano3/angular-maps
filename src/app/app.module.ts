import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAWUhrw7KpnNz472E33EC5_eyTVE1gR5ps'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
