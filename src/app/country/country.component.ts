import { Component, OnInit, ContentChild } from '@angular/core';
import { CountrySelectComponent } from './country-select/country-select.component';
import { CountryflagComponent } from './countryflag/countryflag.component';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  countries$ = this.countryService.getCountries();

  @ContentChild(CountrySelectComponent)
  countrySelected!: CountrySelectComponent;
  @ContentChild(CountryflagComponent) countryFlag!: CountryflagComponent;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    console.log('Holaaa', this.countries$);
  }

selectedCountry(select:HTMLSelectElement):void {
  this.countrySelected.countrySelected = select.value;
  this.countryFlag.selected = select.value;
 }
}
