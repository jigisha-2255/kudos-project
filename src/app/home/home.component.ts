import { Component, OnInit } from '@angular/core';
import { SetGameComponent } from '../set-game/set-game.component';
import { MatDialog } from '@angular/material/dialog';
import { SendAKudoComponent } from '../send-a-kudo/send-a-kudo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  given = false;
  received = false;
  activeSprint = false;
  settingDropdown = false;
  exportMode = false;
  showBottomName:any=[];
  popup = false;
  sendAKudo=false;
  setGame=false;
  addPrize = false;
  showName:any=[];
  socialIcon:any=[];
  checkPrize = false;
  showFullData:any=[];
  cardClick:any=[];
  selectedUser='';
  exportAsJpg=false;
  openDropdown=false;
  constructor(public dialog: MatDialog) {}

  sendKudoClose(close: string) {
    this.sendAKudo=JSON.parse(close);
  }
  setGameClose(close: string) {
    this.setGame=JSON.parse(close);
  }
  toggleSocialIcon(index:number,event: { stopPropagation: () => void; }){
    // console.log(event);
    event.stopPropagation();
    this.socialIcon[index] = !this.socialIcon[index];
  }
  showCardFullData(index:number){
    if(this.exportMode==false){
      this.selectedUser='';
      this.showFullData = !this.showFullData;
    } else{
      this.cardClick[index]=!this.cardClick[index];
    }
  }
  colors: string[] = [
    '#FC6C81',
    '#F6AE2D',
    '#3DB8C6',
    '#9B51E0',
    '#39A55C',
    '#F9C74F',
    '#F8961E',
    '#4F5D75',
  ];
  colorsWhite: string[] = [
    '#FFF',
    '#FFF',
    '#FFF',
    '#FFF',
    '#FFF',
    '#FFF',
    '#FFF',
    '#FFF',
  ];

  cards = [
    {
      img: 'assets/topLeft1.png',
      name: 'Toni Kroos',
      email: 'tonikroos@archibo.de',
      cardHeading: 'Totally Awesome',
      content:
        "Thank you for always being by my side during all the interviews and decision makings in the last sprint. Without you, it wouldn't be that easy for me to manage everything. Looking forward to more tasks together :D",
      topRightImg: 'assets/kudo-card-icons/kicon-man-points-fingers.png',
      bottompattern: 'assets/bottomPattern1New.svg',
      bottomimg: 'assets/bottomRight1.png',
      like:'2',
      comment:'5',
      bottomName:'Idris Elba',
      bottomEmail:'idridelba@archibo.de'
    },
    {
      img: 'assets/topLeft2.png',
      name: 'Toni Kroos',
      email: 'tonikroos@archibo.de',
      cardHeading: 'Congratulations',
      content:
        'I liked your statement and willing to carry forward this learning onwards - As you said "you need all the managers in the team, We lack managers, workers are abundant in the market."',
      topRightImg: 'assets/kudo-card-icons/kicon-giri-with-baloons.png',
      bottompattern: 'assets/bottomPatern2.svg',
      bottomimg: 'assets/bottomRight2.png',
      like:'3',
      comment:'5',
      bottomName:'Idris Elba',
      bottomEmail:'idridelba@archibo.de'
    },
    {
      img: 'assets/topLeft3.png',
      name: 'Matt Hummels',
      email: 'm.hummels@archibo.de',
      cardHeading: 'Proud',
      content:
        'Amazing Job Bhai on Spiritto UI/UX. I was wondering earlier how we could digitalized that module but what you did was beyond my expectation level :D.',
      topRightImg: 'assets/kudo-card-icons/kicon-girl-with-flag.png',
      bottompattern: 'assets/bottomPattern3.svg',
      bottomimg: 'assets/bottomRight3.png',
      like:'2',
      comment:'5',
      bottomName:'John Kent',
      bottomEmail:'johnkent@archibo.de'
    },
    {
      img: 'assets/topLeft4.png',
      name: 'Klara Klaus',
      email: 'klaraklaus@archibo.de',
      cardHeading: 'Great Job',
      content:
        'A big thanks to you for being an acting scrum master and helping me and my HR team-mate plan our first ever HR Sprint! It proves you have great leadership skills! Keep it up!',
      topRightImg: 'assets/kudo-card-icons/kicon-man-checkbox.png',
      bottompattern: 'assets/bottomPattern4.svg',
      bottomimg: 'assets/bottomRight4.png',
      like:'2',
      comment:'5',
      bottomName:'Hans Jacobs',
      bottomEmail:'hansjecobs@archibo.de'
    },
    {
      img: 'assets/topLeft5.png',
      name: 'Gene Hurt',
      email: 'gene.hurt@archibo.de',
      cardHeading: 'Well Done',
      content:
        'A big thanks to you for being an acting scrum master and helping me and my HR team-mate plan our first ever HR Sprint! It proves you have great leadership skills! Keep it up!',
      topRightImg: 'assets/kudo-card-icons/kicon-man-with-crest.png',
      bottompattern: 'assets/bottomPattern5.svg',
      bottomimg: 'assets/bottomRight5.png',
      like:'2',
      comment:'5',
      bottomName:'Ryan Cacao',
      bottomEmail:'ryancacao@archibo.de'
    },
    {
      img: 'assets/topLeft6.png',
      name: 'Satya Chan',
      email: 'satya.chan@archibo.de',
      cardHeading: 'Thanks',
      content:
        'A big thanks to you for being an acting scrum master and helping me and my HR team-mate plan our first ever HR Sprint! It proves you have great leadership skills! Keep it up!',
      topRightImg: 'assets/kudo-card-icons/kicon-woman-with-heart-baloon.png',
      bottompattern: 'assets/bottomPattern6.svg',
      bottomimg: 'assets/bottomRight6.png',
      like:'2',
      comment:'5',
      bottomName:'Jasmin Yu',
      bottomEmail:'jasminyu@archibo.de'
    },
    {
      img: 'assets/topLeft7.png',
      name: 'Chand Jones',
      email: 'chand.jones@archibo.de',
      cardHeading: 'Very Happy',
      content:
        'Hi Chad, I am absolutely amazed and stunned with your idea andcreativity! I trust you studied well and created the UI design and concept based on the Merit money. Keep it up! :) Cheers',
      topRightImg: 'assets/kudo-card-icons/kicon-man-jumping-joy.png',
      bottompattern: 'assets/bottomPattern7.svg',
      bottomimg: 'assets/bottomRight7.png',
      like:'2',
      comment:'5',
      bottomName:'Hans Jacobs',
      bottomEmail:'hansjecobs@archibo.de'
    },
    {
      img: 'assets/topLeft8.png',
      name: 'Ruang Seni',
      email: 'ruang.seni@archibo.de',
      cardHeading: 'Many Thanks',
      content:
        ' Hi Chad, I am absolutely amazed and stunned with your idea and creativity! I trust you studied well and created the UI design and concept based on the Merit money. Keep it up! :) Cheers',
      topRightImg: 'assets/kudo-card-icons/kicon-woman-and-heart.png',
      bottompattern: 'assets/bottomPattern8.svg',
      bottomimg: 'assets/bottomRight8.png',
      like:'2',
      comment:'5',
      bottomName:'Idris Alba',
      bottomEmail:'idrisalba@archibo.de'
    },
    {
      img: 'assets/topLeft3.png',
      name: 'Matt Hummels',
      email: 'm.hummels@archibo.de',
      cardHeading: 'Proud',
      content:
        'Amazing Job Bhai on Spiritto UI/UX. I was wondering earlier how we could digitalized that module but what you did was beyond my expectation level :D.',
      topRightImg: 'assets/kudo-card-icons/kicon-girl-with-flag.png',
      bottompattern: 'assets/bottomPattern3.svg',
      bottomimg: 'assets/bottomRight3.png',
      like:'2',
      comment:'5',
      bottomName:'John Kent',
      bottomEmail:'johnkent@archibo.de'
    },
    {
      img: 'assets/topLeft3.png',
      name: 'Matt Hummels',
      email: 'm.hummels@archibo.de',
      cardHeading: 'Great Job',
      content:
        'A big thanks to you for being an acting scrum master and helping me and my HR team-mate plan our first ever HR Sprint! It proves you have great leadership skills! Keep it up!',
      topRightImg: 'assets/kudo-card-icons/kicon-man-checkbox.png',
      bottompattern: 'assets/bottomPattern3.svg',
      bottomimg: 'assets/bottomRight3.png',
      like:'3',
      comment:'5',
      bottomName:'Hans Jacobs',
      bottomEmail:'hansjecobs@archibo.de'
    },
    {
      img: 'assets/topLeft1.png',
      name: 'Toni Kroos',
      email: 'tonikroos@archibo.de',
      cardHeading: 'Totally Awesome',
      content:
        "Thank you for always being by my side during all the interviews and decision makings in the last sprint. Without you, it wouldn't be that easy for me to manage everything. Looking forward to more tasks together :D",
      topRightImg: 'assets/kudo-card-icons/kicon-man-points-fingers.png',
      bottompattern: 'assets/bottomPattern1New.svg',
      bottomimg: 'assets/bottomRight1.png',
      like:'2',
      comment:'5',
      bottomName:'Hans Jacobs',
      bottomEmail:'hansjecobs@archibo.de'
    },
    {
      img: 'assets/topLeft2.png',
      name: 'Toni Kroos',
      email: 'tonikroos@archibo.de',
      cardHeading: 'Congratulations',
      content:
        'I liked your statement and willing to carry forward this learning onwards - As you said "you need all the managers in the team, We lack managers, workers are abundant in the market."',
      topRightImg: 'assets/kudo-card-icons/kicon-giri-with-baloons.png',
      bottompattern: 'assets/bottomPatern2.svg',
      bottomimg: 'assets/bottomRight2.png',
      like:'3',
      comment:'5',
      bottomName:'Hans Jacobs',
      bottomEmail:'hansjecobs@archibo.de'
    },
    {
      img: 'assets/topLeft6.png',
      name: 'Satya Chan',
      email: 'satya.chan@archibo.de',
      cardHeading: 'Thanks',
      content:
        'A big thanks to you for being an acting scrum master and helping me and my HR team-mate plan our first ever HR Sprint! It proves you have great leadership skills! Keep it up!',
      topRightImg: 'assets/kudo-card-icons/kicon-woman-with-heart-baloon.png',
      bottompattern: 'assets/bottomPattern6.svg',
      bottomimg: 'assets/bottomRight6.png',
      like:'2',
      comment:'5',
      bottomName:'Hans Jacobs',
      bottomEmail:'hansjecobs@archibo.de'
    },
    {
      img: 'assets/topLeft7.png',
      name: 'Chand Jones',
      email: 'chand.jones@archibo.de',
      cardHeading: 'Very Happy',
      content:
        'Hi Chad, I am absolutely amazed and stunned with your idea andcreativity! I trust you studied well and created the UI design and concept based on the Merit money. Keep it up! :) Cheers',
      topRightImg: 'assets/kudo-card-icons/kicon-man-jumping-joy.png',
      bottompattern: 'assets/bottomPattern7.svg',
      bottomimg: 'assets/bottomRight7.png',
      like:'2',
      comment:'5',
      bottomName:'Lars Mikkel',
      bottomEmail:'larsmikkel@archibo.de'
    },
    {
      img: 'assets/topLeft8.png',
      name: 'Ruang Seni',
      email: 'ruang.seni@archibo.de',
      cardHeading: 'Many Thanks',
      content:
        ' Hi Chad, I am absolutely amazed and stunned with your idea and creativity! I trust you studied well and created the UI design and concept based on the Merit money. Keep it up! :) Cheers',
      topRightImg: 'assets/kudo-card-icons/kicon-woman-and-heart.png',
      bottompattern: 'assets/bottomPattern8.svg',
      bottomimg: 'assets/bottomRight8.png',
      like:'2',
      comment:'5',
      bottomName:'Anip Safiya',
      bottomEmail:'anipsafiya@archibo.de'
    },
    {
      img: 'assets/topLeft5.png',
      name: 'Gene Hurt',
      email: 'gene.hurt@archibo.de',
      cardHeading: 'Well Done',
      content:
        'A big thanks to you for being an acting scrum master and helping me and my HR team-mate plan our first ever HR Sprint! It proves you have great leadership skills! Keep it up!',
      topRightImg: 'assets/kudo-card-icons/kicon-man-with-crest.png',
      bottompattern: 'assets/bottomPattern5.svg',
      bottomimg: 'assets/bottomRight5.png',
      like:'2',
      comment:'5',
      bottomName:'Hans Jacobs',
      bottomEmail:'hansjecobs@archibo.de'
    },
  ];
  userName:string='';
  dropdownSearch=false;
  users=[{
    "name": "Toni Kroos",
    "img":'../../assets/topLeft3.png'
  },{
    "name": "Martha Claus",
    "img":'../../assets/topLeft1.png'
  },
  {
    "name": "Karla Svensson",
    "img":'../../assets/topLeft2.png'
  },
  {
    "name": "Will Smith",
    "img":'../../assets/topLeft4.png'
  },{
    "name":"Alexandar Zverev",
    "img":'../../assets/topLeft5.png'
  }]
  selectedOption = '';
  options=[
    {
      label:'Totally Awesome',value:'Totally Awesome',image:'../../assets/topRight1.svg',background:'#FF6584'
    },
    {
      label:'Congratulations',value:'Congratulations',image:'../../assets/topRight2.svg',background:'#40C1B5'
    },
    {
      label:'Proud',value:'Proud',image:'../../assets/topRight3.svg',background:'#9E4A83'
    },  
    {
      label:'Great Job',value:'Great Job',image:'../../assets/topRight4.svg',background:'#8E5696'
    },
    {
      label:'Well Done',value:'Well Done',image:'../../assets/topRight5.svg',background:'#E3E8F4'
    },
    {
      label:'Thanks',value:'Thanks',image:'../../assets/topRight6.svg',background:'#FFB9B9'
    },
    {
      label:'Very Happy',value:'Very Happy',image:'../../assets/topRight7.svg',background:'#40C1B5'
    },
    {
      label:'Many Thanks',value:'Many Thanks',image:'../../assets/topRight8.svg',background:'#EDD79B'
    },
  ]
  optionSelected(){
    console.log('selected option', this.selectedOption);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SendAKudoComponent, {
      maxWidth: '95vw',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
  openSetGame(): void {
    const dialogRef = this.dialog.open(SetGameComponent, {
      width: '90vw',
      height:'90vh',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
  selectUser(user:string){
    this.selectedUser=user;
    if(user!='Toni Kroos' && user!=''){
      this.showFullData=true;
    } else{
      this.showFullData=false;
    }
    this.dropdownSearch=!this.dropdownSearch;
    this.openDropdown=false;
  }
  searchDropdown(){
    this.openDropdown=!this.openDropdown;
    this.selectedUser='';
    this.showFullData=false;
  }
}
