import {Component} from '@angular/core';
import {GameMechanics} from '../services/gamemechanics.service';
import {Router} from '@angular/router';

@Component({
	selector:"startscreen",
	templateUrl:"./startscreen.component.html"
})
export class StartScreen {

	constructor(private _game:GameMechanics,private _router:Router) {}

	startGame() {
		this._game.startGame();
		this._router.navigate(['/game']);
	}
}