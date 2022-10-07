import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-selected',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css'],
})
export class CountrySelectComponent implements OnInit {
  @Input() selected!: string;

  constructor() {}

  ngOnInit() {}
}
