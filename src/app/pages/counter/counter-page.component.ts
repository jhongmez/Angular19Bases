import { Component } from "@angular/core";

@Component({
	selector: "app-counter-page",
	templateUrl: './counter-page.component.html',
	styles: `
		button {
			padding: 5px;
			margin: 5px 10px;
			width: 75px;
		}
	`
})
export class CounterPageComponent {

	public counter: number = 10;

	increaseBy( value: number ) {
		this.counter += value;
	}

	resetCounter() {
		this.counter = 10;
	}
}
