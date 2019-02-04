import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selection-oz',
  templateUrl: './selection-oz.component.html',
  styleUrls: ['./selection-oz.component.scss']
})
export class SelectionOzComponent implements OnInit {
  @Input() amount: number;

  constructor() {}

  ngOnInit() {}
}
