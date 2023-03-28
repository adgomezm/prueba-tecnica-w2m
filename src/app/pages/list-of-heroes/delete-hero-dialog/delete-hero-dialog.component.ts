import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Hero } from 'src/app/models/heroes.model';
import { DeleteHero } from 'src/app/store/actions/heroe.actions';

@Component({
  selector: 'app-delete-hero-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './delete-hero-dialog.component.html',
  styleUrls: ['./delete-hero-dialog.component.scss'],
})
export class DeleteHeroDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteHeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { heroe: Hero },
    private store: Store,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(): void {
    this.store.dispatch(DeleteHero({ id: this.data.heroe.id }));

    this.dialogRef.close();
  }
}
