import { Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  countries$ = this.countryService.getCountries();

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    console.log('Holaaa', this.countries$);
  }
}
