export = CommandLineCommands;

declare function CommandLineCommands(commands: Array<any> | CommandLineCommands.I__commands, argv?: Array<any>): object;
declare namespace CommandLineCommands {
	export interface I__commands {
		'length': number;
	}

}