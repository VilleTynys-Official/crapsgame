import {Injectable} from '@angular/core';


interface IGameResults {
	message: string;
	type:string;
}

@Injectable()
export class GameMechanics {
	
	private dice:Array<number> = [0,0]
	private numberOfRolls:number;
	private userName:string = ""
	private bet:string;
	private sum:number;
	private point:number | null = null;
	private gameResults:IGameResults = {
		message:".....",
		type:"default"
	};

	startGame(userName:string, bet:string) {
		this.userName = userName;
		this.bet = bet;
		this.numberOfRolls = 0;
		this.gameResults = {
			message:`Hi ${this.userName}. Click play to roll the dice`,
			type:"default"
		}
	}

	/**
	 * @returns the game results in the following object:
	 * {
	 * message: string,
	 * type: string ("win" || "lose" || "moneyback" || "game_continues" || "default")
	 * }
	 */

	 roll() {
		this.numberOfRolls++;
		this.dice[0] = Math.floor(Math.random()*6)+1;
		this.dice[1] = Math.floor(Math.random()*6)+1;
		this.setSum();

		if(this.bet == "PASS"){
			this.playPass()
		}else{
			this.playDontPass()
		}
		
		//  Update message

		switch(this.gameResults.type){
			case "win":
				this.gameResults.message = `You rolled ${this.sum}. You won!` 
				break;
			case "lose":
				this.gameResults.message = `You rolled ${this.sum}. So you just lost.`
				break;
			case "game_continues":
				this.gameResults.message = `You rolled ${this.sum}. The game continues`
				break;
			case "money_back":
				this.gameResults.message = `You got your money back because you rolled 12 and you had bet "don't pass" `
				break;
			default:
				this.gameResults.message = "Something went wrong"
		}
		return this.gameResults 

	}

	getUserName(){
		return this.userName;
	}

	setSum(){
		this.sum= this.dice[0] + this.dice[1];
	}

	getSum(){
		return this.sum;
	}
	getdice(){
		return this.dice;
	}

	getMessage(){
		return this.gameResults.message;
	}

	getNumberOfRolls(){
		return this.numberOfRolls;
	}

	// LOGIC FOR PASS BET
	playPass(){
		// First round (we know there is no point in the first round so it is used for control logic)
		console.log('Playing "playPass" with a sum of: ', this.sum);
		if(this.point == null){
			
			if(this.sum ===7 || this.sum === 11){
				console.log('win');
				this.gameResults.type = "win"
				return
			}
			if(this.sum === 2 || this.sum === 3 || this.sum === 12){
				console.log('lose');
				this.gameResults.type = "lose"
				return
			}

			this.point = this.sum;
			this.gameResults.type = "game_continues"
			return
		}
	
		//  Other rounds. This runs always after first round.
		
		if(this.sum === 7){
			this.gameResults.type = "lose"
			return
		}
		
		if(this.point == this.sum){
			this.gameResults.type = "win"
			return
		}
		this.gameResults.type = "game_continues"
		return
	}

	// LOGIC FOR DON'T PASS BET
	playDontPass(){
			// First round
			console.log('Playing "playPass" with a sum of: ', this.sum);			
			
			if(this.point == null){
	
				if(this.sum ===7 || this.sum === 11){
					return {
						type:"lose",
					}
				}
				if(this.sum === 2 || this.sum === 3){
					return {
						type:"win",
					}
				}

				if(this.sum === 12){
					return {
						type:"money_back"
					}
				}
	
				this.point = this.sum;
				return {
					type: "game_continues"
				}
			}
		
			//  Other rounds
			
			if(this.sum === 7){
				return{
					type:"win"
				}
			}
			
			if(this.point == this.sum){
				return{
					type:"lose"
				}
			}
			return {
				type:"game_continues"
			}
	}

}