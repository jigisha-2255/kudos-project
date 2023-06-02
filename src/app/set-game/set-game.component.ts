import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-set-game',
  templateUrl: './set-game.component.html',
  styleUrls: ['./set-game.component.scss']
})
export class SetGameComponent{
  addPrize=false;
  @Output() popupClose = new EventEmitter<string>();
  constructor(public dialogRef: MatDialogRef<SetGameComponent>) {}
  setGameClose(value: string) {
    this.popupClose.emit(value);
  }
}

