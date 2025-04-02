import { Component, signal } from '@angular/core';

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

	characters = signal<Character[]>([
		{ id: 1, name: 'Goku', power: 90001 },
		{ id: 2, name: 'Vegeta', power: 70000 },
		{ id: 3, name: 'Trunks', power: 30000 },
	]);

}
