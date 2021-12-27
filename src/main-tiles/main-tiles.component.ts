import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-tiles',
  templateUrl: './main-tiles.component.html',
  styleUrls: ['./main-tiles.component.scss'],
})
export class MainTilesComponent implements OnInit {
  tiles = [
    { label: 'pisklęta', id: '0', color: '#ff0' },
    { label: 'uCiebie med', id: '2', color: '#f0f' },
  ];

  zmienna = {}

  constructor() {}

  ngOnInit(): void {}
}
