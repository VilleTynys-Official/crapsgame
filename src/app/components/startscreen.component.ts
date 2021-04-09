import {Component} from '@angular/core';
import {GameMechanics} from '../services/gamemechanics.service';
import {Router} from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
	selector:"startscreen",
	templateUrl:"./startscreen.component.html"
})
export class StartScreen {

    userName:string = "";
	bets: Array<string>= ["PASS", "DONT_PASS"]
	bet:string = "PASS"

	constructor(private _game:GameMechanics,private _router:Router) {}

	// FOR THE SELECTION
	changeBet(e) {
		 this.bet = e.target.value
		 console.log('bet is', this.bet);
		 
	}

	startGame() {
		this._game.startGame(this.userName, this.bet);
		this._router.navigate(['/game']);
	}
}