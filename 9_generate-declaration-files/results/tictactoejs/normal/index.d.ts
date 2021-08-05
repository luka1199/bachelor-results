export class TicTacToe {
	constructor(requestSize?: undefined);
	getSize(): number;
	turn(): string;
	move(x: number, y: number): boolean;
	moveArray(row: number, col: number): boolean;
	status(): string;
	isDraw(): boolean;
	gameOver(): boolean;
	legalMoves(): Array<any>;
	randomMove(): void;
}

