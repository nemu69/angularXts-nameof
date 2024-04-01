import { Component } from "@angular/core";


let x: string;
interface ITest { Prop: number }

@Component({
	selector: "app-root",
	template:	`
		<h1>Welcome to {{ title }}</h1>
	`,
	styles: [],
	standalone: true,
})
export class AppComponent
{
	title = "angularXts-nameof";

	constructor()
	{
		console.log(nameof(x)); // Prints `x`
		console.log(nameof(console)); // Prints `console`
		console.log(nameof(/.*/.test)); // Prints `test`
		console.log(nameof<void>()); // Prints `void`
		console.log(nameof<ITest>()); // Prints `ITest`
		console.log(nameof<ITest>((test: ITest) => test.Prop)); // Prints `prop`
	}

}
