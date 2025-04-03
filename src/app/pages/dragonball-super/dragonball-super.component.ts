import { Component, signal } from '@angular/core';

interface Character {
	id: number;
	name: string;
	power: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [],
  templateUrl: './dragonball-super.component.html',
})
export class DragonballSuperComponent {

	name = signal('');
	power = signal(0);

	characters = signal<Character[]>([
		{ id: 1, name: 'Goku', power: 90001 },
		{ id: 2, name: 'Vegeta', power: 70000 },
	]);

	addCharacter() {
		if( !this.name() || !this.power() || this.power() <= 0 ) return;

		const newCharacter: Character = {
			id: this.characters().length + 1,
			name: this.name(),
			power: this.power()
		}

		// * La forma correcta de actualizar un signal es con el método update
		this.characters.update( (listCharacters) => [...listCharacters,newCharacter]);
	}

	resetFields() {
		this.name.set('');
		this.power.set(0);
	}

}
