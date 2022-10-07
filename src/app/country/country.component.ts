import { Component, OnInit, ContentChild } from '@angular/core';
import { Subject } from 'rxjs';
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
  selected$: Subject<string> = new Subject<string>();

  constructor(private countryService: CountryService) {}

  ngOnInit() {
  
  }

  changed(value: any) {
    this.selected$.next(value);
  }
}
