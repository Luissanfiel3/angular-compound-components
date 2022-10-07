import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountryComponent } from './country/country.component';
import { CountryflagComponent } from './country/countryflag/countryflag.component';
import { CountrySelectComponent } from './country/country-select/country-select.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CountryComponent,
    CountryflagComponent,
    CountrySelectComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
