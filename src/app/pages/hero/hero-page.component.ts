import { Component, signal } from "@angular/core";
import { UpperCasePipe } from '@angular/common';


@Component({
	selector: 'app-hero-page',
	templateUrl: './hero-page.component.html',
	imports: [UpperCasePipe],
})
export class HeroPageComponent {

	public name = signal('Ironman');
	public age = signal(45);

	getHeroDescription() {
		return `${this.name} - ${this.age}`;
	}

	changeHero() {
		// * La forma correcta de actualizar un signal es con el método update
		this.name.set('Spiderman');
		this.age.set(22);
	}

	resetForm() {
		this.name.set('Ironman');
		this.age.set(45);
	}

	changeAge() {
		this.age.set(60);
	}
}
