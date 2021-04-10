import {Injectable} from '@angular/core';


interface IGameResults {
	message: string;
	type:string;
}

@Injectable()
export class GameMechanics {
	
	private die:Array<number> = [0,0]
	private numberOfRolls:number;
	private playerName:string;
	private bet:string;
	private sum:number;
	private point:number | null = null;
	private gameResults:IGameResults = {
		message:"Click roll to play",
		type:"default"
	}

	startGame(playerName:string, bet:string) {
		this.playerName = playerName;
		this.bet = bet;
		this.numberOfRolls = 0;
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
		this.die[0] = Math.floor(Math.random()*6)+1;
		this.die[1] = Math.floor(Math.random()*6)+1;
		this.setSum();



		if(this.bet == "PASS"){
			this.gameResults.type= this.playPass().type
		}else{
			this.gameResults.type = this.playDontPass().type
		}
		
		// CREATE SWITCH FOR ANSWER MESSAGES

		switch(this.gameResults.type){
			case "win":
				this.gameResults.message = "Congrats you have won!"
				break;
			case "lose":
				this.gameResults.message = "Oh no you just lost"
				break;
			case "game_continues":
				this.gameResults.message = "Game continues.."
				break;
			case "money_back":
				this.gameResults.message = `You got your money back because sum was 12 and you had bet "don't pass" `
				break;
			default:
				this.gameResults.message = "Something went wrong"
		}
		return this.gameResults

	}

	setSum(){
		this.sum= this.die[0] + this.die[1]
	}

	getSum(){
		return this.sum;
	}
	getDie(){
		return this.die;
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
				return {
					type:"win",
				}
			}
			if(this.sum === 2 || this.sum === 3 || this.sum === 12){
				console.log('lose');
				return {
					type:"lose",
				}
			}

			this.point = this.sum;
			return {
				type: "game_continues"
			}
		}
	
		//  Other rounds. This runs always after first round.
		
		if(this.sum === 7){
			return{
				type:"lose"
			}
		}
		
		if(this.point == this.sum){
			return{
				type:"win"
			}
		}
		return {
			type:"game_continues"
		}
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