import { Component, OnInit, Input } from '@angular/core';
import { CountryComponent } from '../country.component';

@Component({
  selector: 'app-country-selected',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css'],
})
export class CountrySelectComponent {
  constructor(public country: CountryComponent) {}
}
