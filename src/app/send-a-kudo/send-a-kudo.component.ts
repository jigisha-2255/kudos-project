import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-send-a-kudo',
  templateUrl: './send-a-kudo.component.html',
  styleUrls: ['./send-a-kudo.component.scss']
})
export class SendAKudoComponent {
  showDropdown=false;
  @Output() popupClose = new EventEmitter<string>();
  category: string = 'Congratulations';
  bg:string='#40C1B5';
  img:string = '../../assets/topRight2.svg';
  showImg=false;
  selectedAll: any;
  searchMember:string='';
  constructor(public dialogRef: MatDialogRef<SendAKudoComponent>) {}
  players = [
    {
      name: 'Patty Kerri',
      img: 'assets/topLeft8.png',
      checked: false
    },
    {
      name: 'Matt Hummels',
      img: 'assets/topLeft8.png',
      checked: true
    },
    {
      name: 'Toni Kroos',
      img: 'assets/bottomRight8.png',
      checked: false
    },
    {
      name: 'Robert Patrick',
      img: 'assets/bottomRight4.png',
      checked: false
    },
    {
      name: 'Will Smith',
      img: 'assets/topLeft8.png',
      checked: false
    },
    {
      name: 'Jan Jancov',
      img: 'assets/topLeft2.png',
      checked: false
    },
    {
      name: 'Igloo Kagawa',
      img: 'assets/topLeft8.png',
      checked: false
    },
    {
      name: 'Karla Svensson',
      img: 'assets/topLeft8.png',
      checked: false
    },
  ];
  sendKudoClose(value: string) {
    this.popupClose.emit(value);
  }

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
  showDiv(category: any,background: any,img:any){
    console.log(category);
    this.category=category;
    this.bg=background;
    this.img=img;
    this.showDropdown=false;
  }

  selectAll() {
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].checked = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.players.every(function(item:any) {
        return item.checked == true;
      })
  }
}
