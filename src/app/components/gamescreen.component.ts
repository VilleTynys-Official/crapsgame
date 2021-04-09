import {Component} from '@angular/core';
import {GameMechanics} from '../services/gamemechanics.service';
import {Router} from '@angular/router';

@Component({
	selector:"gamescreen",
	templateUrl:"./gamescreen.component.html"
})
export class GameScreen {

	public message:string = "Please enter a number between 1 and 100";
	public currentGuess:number = 0;
	public currentLow:number = 1;
	public currentHigh:number = 100;
	public numberOfGuesses:number = 0;
	
	constructor(private _game:GameMechanics, private _router:Router) {}
	
	// guess() {
	// 	if(isNaN(this.currentGuess)) {
	// 		this.message = "Please guess a NUMBER!";
	// 		return;
	// 	}
	// 	if(this.currentGuess > this.currentHigh) {
	// 		this.message = "Your guess was higher than current high. Please guess a lower number!";
	// 		return;
	// 	}
	// 	if(this.currentGuess < this.currentLow) {
	// 		this.message = "Your guess was lower than current low. Please guess a higher number!";
	// 		return;
	// 	}
	// 	let temp = this._game.runGame(this.currentGuess);
	// 	if(temp.type === "low") {
	// 		this.message = "Your guess was too low. Low limit is now "+this.currentGuess+". Try again!"
	// 		this.currentLow = this.currentGuess;
	// 		this.numberOfGuesses = temp.numberOfGuesses;
	// 		this.currentGuess = 0;
	// 		return;
	// 	}
	// 	if(temp.type === "high") {
	// 		this.message = "Your guess was too high. High limit is now "+this.currentGuess+". Try again!";
	// 		this.currentHigh = this.currentGuess;
	// 		this.numberOfGuesses = temp.numberOfGuesses;
	// 		this.currentGuess = 0;
	// 		return;
	// 	}
	// 	if(temp.type === "win") {
	// 		alert("Congrats! You win in "+temp.numberOfGuesses+" guesses!");
	// 		this.numberOfGuesses = 0;
	// 		this.currentGuess = 0;
	// 		this.currentLow = 1;
	// 		this.currentHigh = 100;
	// 		this.message = "Please enter a number between 1 and 100";
	// 		this._router.navigate(["/start"]);
	// 	}
	// }

}