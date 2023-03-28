import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/models/heroes.model';

export enum HerosActions {
  ADD_HERO = 'ADD_HERO',
  DELETE_HERO = 'DELETE_HERO',
  LOAD_HEROES = 'LOAD_HEROES',
  EDIT_HERO = 'EDIT_HERO',
}

export const AddHero = createAction(HerosActions.ADD_HERO, props<{ hero: Hero }>());
export const EditHero = createAction(HerosActions.EDIT_HERO, props<{ hero: Hero }>());
export const DeleteHero = createAction(HerosActions.DELETE_HERO, props<{ id: number }>());
export const LoadHeros = createAction(HerosActions.LOAD_HEROES);
