import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';

interface Character {
	id: number;
	name: string;
	power: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [ CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
})
export class DragonballSuperComponent {

	addCharacter( newCharacter: Character) {
		this.characters.update( (listCharacters) => [...listCharacters,newCharacter]);
	}

	characters = signal<Character[]>([
		{ id: 1, name: 'Goku', power: 90001 },
		{ id: 2, name: 'Vegeta', power: 70000 },
	]);

}
