import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HerosListState } from '../reducers/heroe.reducers';

export const getHeroModuleState = createFeatureSelector<HerosListState>('heroeModuleState');
export const getHeroStateData = createSelector(getHeroModuleState, state => state.heroesList);
export const getHerosBySearch = (busqueda: string) =>
  createSelector(getHeroModuleState, data =>
    data.heroesList.filter(c =>
      isNaN(+busqueda)
        ? c.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) >= 0
        : c.id === +busqueda,
    ),
  );
