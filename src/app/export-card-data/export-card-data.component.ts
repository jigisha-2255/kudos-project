import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-card-data',
  templateUrl: './export-card-data.component.html',
  styleUrls: ['./export-card-data.component.scss']
})
export class ExportCardDataComponent{
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
  sendKudoClose(close: string) {
    this.sendAKudo=JSON.parse(close);
    console.log(this.sendAKudo);
  }
  setGameClose(close: string) {
    this.setGame=JSON.parse(close);
    console.log(this.sendAKudo);
  }
  toggleSocialIcon(index:number){
    this.socialIcon[index] = !this.socialIcon[index];
  }
  showCardFullData(index:number){
    if(this.exportMode==false){
      this.showFullData = !this.showFullData;
    } else{
      this.cardClick[index]=!this.cardClick[index];
    }
  }
  showUserName(index:number){
    this.showName[index] = true;
  }
  hideName(index:number){
    this.showName[index]=false;
  }
  showBottomUserName(index:number){
    this.showBottomName[index]=true;
  }
  hideBottomUserName(index:number){
    this.showBottomName[index] = false
  }

  cards = [
    {
      img: 'assets/topLeft1.png',
      name: 'Toni Kroos',
      email: 'tonikroos@archibo.de',
      cardHeading: 'Totally Awesome',
      content:
        "Thank you for always being by my side during all the interviews and decision makings in the last sprint. Without you, it wouldn't be that easy for me to manage everything. Looking forward to more tasks together :D",
      topRightImg: 'assets/topRight1.svg',
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
      topRightImg: 'assets/topRight2.svg',
      bottompattern: 'assets/bottomPatern2.svg',
      bottomimg: 'assets/bottomRight2.png',
      like:'3',
      comment:'5',
      bottomName:'Idris Elba',
      bottomEmail:'idridelba@archibo.de'
    },
  ];
}

