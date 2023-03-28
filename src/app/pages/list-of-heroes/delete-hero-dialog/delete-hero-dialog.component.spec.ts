import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { DeleteHero } from 'src/app/store/actions/heroe.actions';
import { initialState } from 'src/app/store/reducers/heroe.reducers';

import { DeleteHeroDialogComponent } from './delete-hero-dialog.component';
const dialogMock = {
  close: () => [],
};
describe('DeleteHeroDialogComponent', () => {
  let component: DeleteHeroDialogComponent;
  let fixture: ComponentFixture<DeleteHeroDialogComponent>;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteHeroDialogComponent],
      providers: [
        provideMockStore({ initialState }),
        Store,
        {
          provide: MatDialogRef,
          useValue: dialogMock,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { heroe: { id: 0, nombre: 'Ant-Man', franquicia: 'Marvel' } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteHeroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store);
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

  it('should dispatch DeleteHero action', async () => {
    const dispatchSpy = spyOn(store, 'dispatch'); // spy on the store
    const action = DeleteHero({ id: component.data.heroe.id });
    component.onYesClick();
    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalledWith(action);
  });
});
