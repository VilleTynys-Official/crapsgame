import {Component} from '@angular/core';
import {GameMechanics} from '../services/gamemechanics.service';
import {Router} from '@angular/router';

@Component({
	selector:"gamescreen",
	templateUrl:"./gamescreen.component.html"
})
export class GameScreen {

	public message:string = "Start rolling the dice by clicking play!";

	constructor(private _game:GameMechanics, private _router:Router) {}

	runGame(){
		let temp = this._game.roll()
		console.log('**** game result is::: ', temp)

		

	}
}