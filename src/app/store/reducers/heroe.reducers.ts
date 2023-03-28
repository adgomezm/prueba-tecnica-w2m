import { createReducer, on } from '@ngrx/store';
import { Hero } from 'src/app/models/heroes.model';
import * as AppState from 'src/app/store/app.state';
import { AddHero, DeleteHero, EditHero, HerosActions, LoadHeros } from '../actions/heroe.actions';
export interface State extends AppState.State {
  heroesList: HerosListState;
}
export interface HerosListState {
  heroesList: Hero[];
}

export const initialState = {
  heroesList: [
    { id: 0, nombre: 'Ant-Man', franquicia: 'Marvel' },
    { id: 1, nombre: 'Aquaman', franquicia: 'DC' },
    { id: 2, nombre: 'Hawkeye', franquicia: 'Marvel' },
    { id: 3, nombre: 'The Atom', franquicia: 'DC' },
    { id: 4, nombre: 'The Avengers', franquicia: 'Marvel' },
    { id: 5, nombre: 'Batgirl', franquicia: 'DC' },
    { id: 6, nombre: 'Batman', franquicia: 'DC' },
    { id: 7, nombre: 'Batwoman', franquicia: 'DC' },
    { id: 8, nombre: 'Black Canary', franquicia: 'DC' },
    { id: 9, nombre: 'Black Panther', franquicia: 'Marvel' },
    { id: 10, nombre: 'Captain America', franquicia: 'Marvel' },
    { id: 11, nombre: 'Captain Marvel', franquicia: 'Marvel' },
    { id: 13, nombre: 'Catwoman', franquicia: 'DC' },
    { id: 14, nombre: 'The Flash', franquicia: 'DC' },
    { id: 15, nombre: 'Daredevil', franquicia: 'Marvel' },
    { id: 16, nombre: 'Doctor Strange', franquicia: 'Marvel' },
    { id: 17, nombre: 'Fantastic Four', franquicia: 'Marvel' },
    { id: 18, nombre: 'Green Lantern', franquicia: 'DC' },
    { id: 19, nombre: 'Guardians of the Galaxy', franquicia: 'Marvel' },
    { id: 20, nombre: 'Incredible Hulk', franquicia: 'Marvel' },
    { id: 21, nombre: 'Iron Fist', franquicia: 'Marvel' },
    { id: 22, nombre: 'Iron Man', franquicia: 'Marvel' },
    { id: 23, nombre: 'Robin', franquicia: 'DC' },
    { id: 24, nombre: 'Spider-Man', franquicia: 'Marvel' },
    { id: 25, nombre: 'Superman', franquicia: 'DC' },
    { id: 26, nombre: 'Wolverine', franquicia: 'Marvel' },
    { id: 27, nombre: 'Wonder Woman', franquicia: 'DC' },
    { id: 28, nombre: 'X-Men', franquicia: 'DC' },
  ],
};

export const heroeListReducerFunctions: Record<
  string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (state: HerosListState, payload: any) => HerosListState
> = {
  [HerosActions.ADD_HERO]: (_state, { hero }): HerosListState => {
    const heroes: Hero[] = _state.heroesList.slice() || [];
    const newId: Hero = _state.heroesList[_state.heroesList.length - 1];
    const newHero: Hero = { ...hero, id: newId.id + 1 };
    heroes.push(newHero);
    return {
      ..._state,
      heroesList: heroes,
    };
  },
  [HerosActions.EDIT_HERO]: (_state, { hero }): HerosListState => {
    const heroes: Hero[] = _state.heroesList.slice() || [];
    const indexToUpdate: number = heroes.findIndex(item => item.id === hero.id);
    heroes[indexToUpdate] = hero;
    return {
      ..._state,
      heroesList: heroes,
    };
  },
  [HerosActions.DELETE_HERO]: (_state, { id }): HerosListState => {
    const heroes: Hero[] = _state.heroesList.filter(item => item.id !== id);
    return {
      ..._state,
      heroesList: heroes,
    };
  },
  [HerosActions.LOAD_HEROES]: (_state): HerosListState => {
    return {
      ..._state,
    };
  },
};

export const heroeListReducer = createReducer<HerosListState>(
  initialState,
  on(AddHero, heroeListReducerFunctions[HerosActions.ADD_HERO]),
  on(EditHero, heroeListReducerFunctions[HerosActions.EDIT_HERO]),
  on(DeleteHero, heroeListReducerFunctions[HerosActions.DELETE_HERO]),
  on(LoadHeros, heroeListReducerFunctions[HerosActions.LOAD_HEROES]),
);
