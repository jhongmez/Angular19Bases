import { Component, signal } from "@angular/core";

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
	public counterSignal = signal(10);

	increaseBy( value: number ) {
		this.counter += value;
		// * La forma correcta de actualizar un signal es con el método update
		this.counterSignal.update( (current) => current + value)
	}

	resetCounter() {
		this.counter = 0;
		this.counterSignal.set(0);
	}
}
