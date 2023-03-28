import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { Hero } from 'src/app/models/heroes.model';

import { ListOfHerosComponent } from './list-of-heroes.component';

describe('ListOfHerosComponent', () => {
  let component: ListOfHerosComponent;
  let fixture: ComponentFixture<ListOfHerosComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfHerosComponent, MatInputModule, BrowserAnimationsModule],
      providers: [provideMockStore(), Store],
    }).compileComponents();

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(ListOfHerosComponent);
    component = fixture.componentInstance;
    component.heroesList = [
      { id: 0, nombre: 'Ant-Man', franquicia: 'Marvel' },
      { id: 1, nombre: 'Aquaman', franquicia: 'DC' },
      { id: 2, nombre: 'Hawkeye', franquicia: 'Marvel' },
      { id: 3, nombre: 'The Atom', franquicia: 'DC' },
      { id: 4, nombre: 'The Avengers', franquicia: 'Marvel' },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return list of heros on ngOnInit', () => {
    const response: Hero[] = [
      { id: 0, nombre: 'Ant-Man', franquicia: 'Marvel' },
      { id: 1, nombre: 'Aquaman', franquicia: 'DC' },
      { id: 2, nombre: 'Hawkeye', franquicia: 'Marvel' },
      { id: 3, nombre: 'The Atom', franquicia: 'DC' },
      { id: 4, nombre: 'The Avengers', franquicia: 'Marvel' },
    ];
    spyOn(store, 'pipe').and.returnValue(of(response));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.heroesList).toEqual(response);
  });

  it('should call buscarHero and return filtered list of heros', async () => {
    const input = fixture.debugElement.query(By.css('.search'));
    const response: Hero[] = [{ id: 0, nombre: 'Ant-Man', franquicia: 'Marvel' }];
    input.nativeElement.value = 'Ant';
    input.nativeElement.dispatchEvent(new Event('keyup'));
    spyOn(store, 'select').and.returnValue(of(response));
    fixture.whenStable().then(() => {
      expect(component.heroesList).toEqual(response);
    });
  });

  it('should call buscarHero and return the complete list', async () => {
    const input = fixture.debugElement.query(By.css('.search'));
    const response: Hero[] = [
      { id: 0, nombre: 'Ant-Man', franquicia: 'Marvel' },
      { id: 1, nombre: 'Aquaman', franquicia: 'DC' },
      { id: 2, nombre: 'Hawkeye', franquicia: 'Marvel' },
      { id: 3, nombre: 'The Atom', franquicia: 'DC' },
      { id: 4, nombre: 'The Avengers', franquicia: 'Marvel' },
    ];
    input.nativeElement.value = '';
    input.nativeElement.dispatchEvent(new Event('keyup'));
    spyOn(store, 'pipe').and.returnValue(of(response));

    expect(component.heroesList).toEqual(response);
  });

  it('should delete hero when clicking delete button', async () => {
    const input = fixture.debugElement.query(By.css('.borrar'));
    input.triggerEventHandler('click', {});

    fixture.whenStable().then(() => {
      expect(component.dialog).toHaveBeenCalled();
    });
  });
  it('should delete hero when clicking delete button', async () => {
    const input = fixture.debugElement.query(By.css('.editar'));
    input.triggerEventHandler('click', {});

    fixture.whenStable().then(() => {
      expect(component.dialog).toHaveBeenCalled();
    });
  });
});
