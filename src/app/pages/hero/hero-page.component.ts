import { Component, computed, signal } from "@angular/core";


@Component({
	selector: 'app-hero-page',
	templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {

	public name = signal('Ironman');
	public age = signal(45);
	public heroDescription = computed( () => {
		return `${this.name()} - ${this.age()}`;
	})
	public capitalizeName = computed( () => {
		return this.name().toUpperCase();
	})

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
