import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { AddHero, EditHero } from 'src/app/store/actions/heroe.actions';

import { HeroeFormComponent } from './heroe-form.component';
const dialogMock = {
  close: () => [],
};
describe('AddHeroeFormComponent', () => {
  let component: HeroeFormComponent;
  let fixture: ComponentFixture<HeroeFormComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroeFormComponent, MatInputModule, BrowserAnimationsModule],
      providers: [
        provideMockStore(),
        Store,
        {
          provide: MatDialogRef,
          useValue: dialogMock,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { opcion: 'Añadir', heroe: { nombre: 'Ant-Man', franquicia: 'Marvel' } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroeFormComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close when cancel button is pressed', () => {
    const spy = spyOn(component.dialogRef, 'close');
    const button = fixture.debugElement.query(By.css('.cancel'));
    button.nativeElement.click();
    expect(spy).toHaveBeenCalled();
  });

  it('should dispatch AddHero action', async () => {
    const dispatchSpy = spyOn(store, 'dispatch'); // spy on the store
    const action = AddHero({ hero: component.data.heroe });
    component.onYesClick();
    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledWith(action);
  });
});

describe('EditHeroeFormComponent', () => {
  let component: HeroeFormComponent;
  let fixture: ComponentFixture<HeroeFormComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroeFormComponent, MatInputModule, BrowserAnimationsModule],
      providers: [
        provideMockStore(),
        Store,
        {
          provide: MatDialogRef,
          useValue: dialogMock,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { opcion: 'Editar', heroe: { nombre: 'Ant-Man', franquicia: 'Marvel' } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroeFormComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    fixture.detectChanges();
  });

  it('should dispatch EditHero action', async () => {
    const dispatchSpy = spyOn(store, 'dispatch'); // spy on the store
    const action = EditHero({ hero: component.data.heroe });
    component.onYesClick();
    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledWith(action);
  });
});
