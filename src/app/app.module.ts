import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { MeteoResultatComponent } from './meteo-resultat/meteo-resultat.component';


@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    MeteoResultatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
