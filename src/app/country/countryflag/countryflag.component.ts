import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countryflag',
  templateUrl: './countryflag.component.html',
  styleUrls: ['./countryflag.component.css'],
})
export class CountryflagComponent {
  @Input() countrySelected!: string;
}
