import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartScreen} from './components/startscreen.component';
import {GameScreen} from './components/gamescreen.component';
const routes: Routes = [	
	{path:"start",component:StartScreen},
	{path:"game",component:GameScreen},
	{path:"",redirectTo:"/start",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
