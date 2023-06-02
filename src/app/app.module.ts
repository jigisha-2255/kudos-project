import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxWheelModule } from 'ngx-wheel';
import { HomeComponent } from './home/home.component';
import { SpinComponent } from './spin/spin.component';
import { WinnersComponent } from './winners/winners.component';
import { SetGameComponent } from './set-game/set-game.component';
import { DescriptionComponent } from './description/description.component';
import { ExportCardDataComponent } from './export-card-data/export-card-data.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FilterPipePipe } from './filter.pipe';
import { SendAKudoComponent } from './send-a-kudo/send-a-kudo.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpinComponent,
    WinnersComponent,
    SetGameComponent,
    DescriptionComponent,
    ExportCardDataComponent,
    FilterPipePipe,
    SendAKudoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWheelModule,
    MaterialModule,
    MatSelectModule,
    MatOptionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
