import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface country {
  name: string;
  code: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countries: country[] = [
    { name: 'España', code: 'ES' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Bahamas', code: 'BS' },
  ];

  getCountries(): Observable<country[]> {
    return of(this.countries);
  }
}
