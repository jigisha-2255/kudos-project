import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpinComponent } from './spin/spin.component';
import { WinnersComponent } from './winners/winners.component';
import { SetGameComponent } from './set-game/set-game.component';
import { DescriptionComponent } from './description/description.component';
import { ExportCardDataComponent } from './export-card-data/export-card-data.component';
import { SendAKudoComponent } from './send-a-kudo/send-a-kudo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'spin',
    component: SpinComponent,
  },
  {
    path: 'winners',
    component: WinnersComponent,
  },
  {
    path: 'set_game',
    component: SetGameComponent,
  },
  {
    path: 'description',
    component: DescriptionComponent,
  },
  {
    path: 'send-kudo',
    component: DescriptionComponent,
  },
  {
    path: 'send-a-kudo',
    component: SendAKudoComponent,
  },
  {
    path: 'export-card-data',
    component: ExportCardDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
