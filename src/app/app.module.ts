import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountryComponent } from './country/country.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule ],
  declarations: [AppComponent, HelloComponent, CountryComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
