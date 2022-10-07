import { Component, Input, OnInit } from '@angular/core';
import { CountryComponent } from '../country.component';

@Component({
  selector: 'app-country-flag',
  templateUrl: './countryflag.component.html',
  styleUrls: ['./countryflag.component.css'],
})
export class CountryflagComponent {
  constructor(public country: CountryComponent) {}
}
