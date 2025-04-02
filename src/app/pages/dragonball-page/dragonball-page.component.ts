import { Component, Signal, signal } from '@angular/core';

interface Character {
	id: number;
	name: string;
	power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

	name = signal('Gohan');

	characters = signal<Character[]>([
		{ id: 1, name: 'Goku', power: 90001 },
		{ id: 2, name: 'Vegeta', power: 70000 },
		{ id: 3, name: 'Trunks', power: 30000 },
		{ id: 4, name: 'Piccolo', power: 40000 },
	]);

}
