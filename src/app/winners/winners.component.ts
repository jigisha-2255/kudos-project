import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent {
  players = [
    {
      name: 'Ruang Seni',
      img: 'assets/topLeft8.png',
    },
    {
      name: 'Karla Svensson',
      img: 'assets/topLeft8.png',
    },
    {
      name: 'Anip Safiya',
      img: 'assets/bottomRight8.png',
    },
    {
      name: 'John Doe',
      img: 'assets/bottomRight4.png',
    },
    {
      name: 'Samuel Brown',
      img: 'assets/topLeft8.png',
    },
    {
      name: 'Tony Kroos',
      img: 'assets/topLeft2.png',
    },
    {
      name: 'Matt Hummels',
      img: 'assets/topLeft8.png',
    },
  ];
}

