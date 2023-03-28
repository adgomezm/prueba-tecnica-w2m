// import { Hero } from 'src/app/models/heroes.model';
import { AddHero, DeleteHero, EditHero, LoadHeros } from '../actions/heroe.actions';
import { heroeListReducer, HerosListState } from './heroe.reducers';

// const oldState: HerosListState = {
//   heroesList: [],
// };

describe('Hero reducers', () => {
  it('should delete a hero', () => {
    const action = DeleteHero({ id: 0 });
    const mockHero: HerosListState = {
      heroesList: [
        { id: 0, nombre: 'Ant-Man', franquicia: 'Marvel' },
        { id: 1, nombre: 'Aquaman', franquicia: 'DC' },
        { id: 2, nombre: 'Hawkeye', franquicia: 'Marvel' },
        { id: 3, nombre: 'The Atom', franquicia: 'DC' },
        { id: 4, nombre: 'The Avengers', franquicia: 'Marvel' },
      ],
    };
    const mockResponse: HerosListState = {
      heroesList: [
        { id: 1, nombre: 'Aquaman', franquicia: 'DC' },
        { id: 2, nombre: 'Hawkeye', franquicia: 'Marvel' },
        { id: 3, nombre: 'The Atom', franquicia: 'DC' },
        { id: 4, nombre: 'The Avengers', franquicia: 'Marvel' },
      ],
    };
    expect(heroeListReducer(mockHero, action)).toEqual(mockResponse);
  });

  it('should add a hero', () => {
    const action = AddHero({ hero: { id: 4, nombre: 'The Avengers', franquicia: 'Marvel' } });
    const mockHero: HerosListState = {
      heroesList: [
        { id: 0, nombre: 'Ant-Man', franquicia: 'Marvel' },
        { id: 1, nombre: 'Aquaman', franquicia: 'DC' },
        { id: 2, nombre: 'Hawkeye', franquicia: 'Marvel' },
        { id: 3, nombre: 'The Atom', franquicia: 'DC' },
      ],
    };
    const mockResponse: HerosListState = {
      heroesList: [
        { id: 0, nombre: 'Ant-Man', franquicia: 'Marvel' },
        { id: 1, nombre: 'Aquaman', franquicia: 'DC' },
        { id: 2, nombre: 'Hawkeye', franquicia: 'Marvel' },
        { id: 3, nombre: 'The Atom', franquicia: 'DC' },
        { id: 4, nombre: 'The Avengers', franquicia: 'Marvel' },
      ],
    };
    expect(heroeListReducer(mockHero, action)).toEqual(mockResponse);
  });
  it('should edit a hero', () => {
    const action = EditHero({ hero: { id: 4, nombre: 'Spider-Man', franquicia: 'Marvel' } });
    const mockHero: HerosListState = {
      heroesList: [
        { id: 0, nombre: 'Ant-Man', franquicia: 'Marvel' },
        { id: 1, nombre: 'Aquaman', franquicia: 'DC' },
        { id: 2, nombre: 'Hawkeye', franquicia: 'Marvel' },
        { id: 3, nombre: 'The Atom', franquicia: 'DC' },
        { id: 4, nombre: 'The Avengers', franquicia: 'Marvel' },
      ],
    };
    const mockResponse: HerosListState = {
      heroesList: [
        { id: 0, nombre: 'Ant-Man', franquicia: 'Marvel' },
        { id: 1, nombre: 'Aquaman', franquicia: 'DC' },
        { id: 2, nombre: 'Hawkeye', franquicia: 'Marvel' },
        { id: 3, nombre: 'The Atom', franquicia: 'DC' },
        { id: 4, nombre: 'Spider-Man', franquicia: 'Marvel' },
      ],
    };
    expect(heroeListReducer(mockHero, action)).toEqual(mockResponse);
  });
  it('should delete a hero', () => {
    const action = LoadHeros();
    const mockHero: HerosListState = {
      heroesList: [
        { id: 0, nombre: 'Ant-Man', franquicia: 'Marvel' },
        { id: 1, nombre: 'Aquaman', franquicia: 'DC' },
        { id: 2, nombre: 'Hawkeye', franquicia: 'Marvel' },
        { id: 3, nombre: 'The Atom', franquicia: 'DC' },
        { id: 4, nombre: 'The Avengers', franquicia: 'Marvel' },
      ],
    };
    const mockResponse: HerosListState = {
      heroesList: [
        { id: 0, nombre: 'Ant-Man', franquicia: 'Marvel' },
        { id: 1, nombre: 'Aquaman', franquicia: 'DC' },
        { id: 2, nombre: 'Hawkeye', franquicia: 'Marvel' },
        { id: 3, nombre: 'The Atom', franquicia: 'DC' },
        { id: 4, nombre: 'The Avengers', franquicia: 'Marvel' },
      ],
    };
    expect(heroeListReducer(mockHero, action)).toEqual(mockResponse);
  });
});
