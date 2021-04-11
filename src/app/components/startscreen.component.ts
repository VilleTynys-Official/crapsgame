import {Component} from '@angular/core';
import {GameMechanics} from '../services/gamemechanics.service';
import {Router} from '@angular/router';

@Component({
	selector:"startscreen",
	templateUrl:"./startscreen.component.html"
})
export class StartScreen {

    userName:string;
	bets: Array<string> = ["PASS", "DONT_PASS"];
	bet: string = "PASS";
	message: string;

	constructor(private _game:GameMechanics , private _router:Router) {
		this.userName = this._game.getUserName();
		this.message = this._game.getMessage();
	}

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