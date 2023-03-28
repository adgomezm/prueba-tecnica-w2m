import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from 'src/app/models/heroes.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AddHero, EditHero } from 'src/app/store/actions/heroe.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-heroe-form',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, CommonModule, FormsModule, MatInputModule],
  templateUrl: './heroe-form.component.html',
  styleUrls: ['./heroe-form.component.scss'],
})
export class HeroeFormComponent {
  newHero: Hero;
  constructor(
    public dialogRef: MatDialogRef<HeroeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { opcion: string; heroe: Hero },
    private store: Store,
  ) {
    this.newHero = { ...this.data.heroe };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(): void {
    if (this.data.opcion === 'Añadir') {
      this.store.dispatch(AddHero({ hero: this.newHero }));
    } else {
      this.store.dispatch(EditHero({ hero: this.newHero }));
    }

    this.dialogRef.close();
  }
}
