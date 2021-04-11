import {Component} from '@angular/core';
import {GameMechanics} from '../services/gamemechanics.service';
import {Router} from '@angular/router';

@Component({
	selector:"gamescreen",
	templateUrl:"./gamescreen.component.html"
})
export class GameScreen {

	public message:string;

	constructor(private _game:GameMechanics, private _router:Router) {
		this.message = this._game.getMessage();
	}

	runGame(){
		let result = this._game.roll()
		console.log('**** game result is::: ', result)
		if(result.type == "game_continues"){
			this.message = result.message;
			return
		}
		this._router.navigate(['/start'])
	}
}