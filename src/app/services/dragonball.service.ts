import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DragonballService {

	addCharacter( newCharacter: Character) {
		this.characters.update( (listCharacters) => [...listCharacters,newCharacter]);
	}

	characters = signal<Character[]>([
		{ id: 1, name: 'Goku', power: 90001 },
		{ id: 2, name: 'Vegeta', power: 70000 },
	]);

	saveToLocalStorage = effect( () => {
		localStorage.setItem('characters', JSON.stringify( this.characters() ))
	})

}
