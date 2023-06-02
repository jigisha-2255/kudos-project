import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.scss']
})
export class SpinComponent {
  showSpinBtn = false;
  slides = [
    { img: 'https://via.placeholder.com/600.png/09f/fff' },
    { img: 'https://via.placeholder.com/600.png/021/fff' },
    { img: 'https://via.placeholder.com/600.png/321/fff' },
    { img: 'https://via.placeholder.com/600.png/422/fff' },
    { img: 'https://via.placeholder.com/600.png/654/fff' },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
  chooseSpinner = false;
  selectedPlayer: any;
  selectedPlayerImg: string = '../../assets/avatar.png';
  constructor(private route: Router) {

  }
  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  players = [
    {
      id: 0,
      name: 'Ruang Seni',
      img: 'assets/topLeft8.png'
    },
    {
      id: 1,
      name: 'Karla Svensson',
      img: 'assets/topLeft8.png'
    },
    {
      id: 2,
      name: 'Anip Safiya',
      img: 'assets/bottomRight8.png'
    },
    {
      id: 4,
      name: 'John Doe',
      img: 'assets/bottomRight4.png'
    },
    {
      id: 5,
      name: 'Samuel Brown',
      img: 'assets/topLeft8.png'
    },
    {
      id: 6,
      name: 'Toni Kroos',
      img: 'assets/topLeft2.png'
    },
    {
      id: 7,
      name: 'Matt Hummels',
      img: 'assets/topLeft8.png'
    },
  ]
  @ViewChild(NgxWheelComponent, { static: false })
  wheel!: { reset: () => void; spin: () => void; };

  seed = [...Array(8).keys()];
  idToLandOn: any;
  items!: any[];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.OUTER;

  ngOnInit() {
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = ["rgba(0, 184, 169, 1)", "rgba(195, 238, 235, 1)"];
    let images = ["url('assets/bottomRight8.png')", "url('assets/bottomRight8.png')"]
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 2],
      text: `Prize ${value}`,
      imgData: this.selectedPlayerImg,
      id: value,
      textFillStyle: "white",
      textFontSize: "16"
    }));
    console.log(this.items);
    console.log(this.seed);
  }
  reset() {
    this.wheel.reset();
  }
  before() {
    alert("Your wheel is about to spin");
  }

  async spin(prize: any) {
    this.idToLandOn = prize;
    await new Promise((resolve) => setTimeout(resolve, 0));
    this.wheel.spin();
  }

  async spinPlayer(prize: any, player: any) {
    console.log(player);
    this.idToLandOn = prize;
    await new Promise((resolve) => setTimeout(resolve, 0));
    this.wheel.spin();
  }

  after() {
    alert("You have been bamboozled");
    this.showSpinBtn = false;
    this.route.navigate(['winners']);
    this.deletePlayer(this.selectedPlayer);
  }
  choosePlayerSpinner(player: any) {
    this.selectedPlayer = player;
    console.log(player);
    this.selectedPlayerImg = '../../' + player.img;
    this.showSpinBtn = true;
  }
  deletePlayer(player: any) {
    console.log(player.id);
    this.players.splice(player.id, 1);
    console.log(this.players);
  }
}

