import {Injectable} from '@angular/core';

@Injectable()
export class GameMechanics {
	
	private die:Array<number> = [0,0]
	private numberOfRolls:number;
	
	startGame() {
		this.numberOfRolls = 0;
		this.die[0] = Math.floor(Math.random()*7)+1;
		this.die[1] = Math.floor(Math.random()*7)+1;
		console.log('Die are', this.die);
		
	}
	
	runGame() {
		console.log('running the game');
		
	}
}