import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { select, Store } from '@ngrx/store';
import { Hero } from 'src/app/models/heroes.model';
import { HerosListState } from 'src/app/store/reducers/heroe.reducers';
import { getHerosBySearch, getHeroStateData } from 'src/app/store/selectors/heroe.selectors';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HeroeFormComponent } from './heroe-form/heroe-form.component';
import { DeleteHeroDialogComponent } from './delete-hero-dialog/delete-hero-dialog.component';

@Component({
  selector: 'app-list-of-heroes',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './list-of-heroes.component.html',
  styleUrls: ['./list-of-heroes.component.scss'],
})
export class ListOfHerosComponent implements OnInit {
  heroesList: Hero[] = [];

  constructor(private store: Store<HerosListState>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.pipe(select(getHeroStateData)).subscribe(list => {
      this.heroesList = list;
    });
  }

  buscarHero(busqueda: Event): void {
    const element = busqueda.target as HTMLInputElement;
    const value = element.value;
    if (value != '')
      this.store.pipe(select(getHerosBySearch(value))).subscribe(list => {
        this.heroesList = list;
      });
    else
      this.store.pipe(select(getHeroStateData)).subscribe(list => {
        this.heroesList = list;
      });
  }
  deleteHero(heroe: Hero): void {
    this.dialog.open(DeleteHeroDialogComponent, { data: { heroe: heroe } });
  }
  openDialog(action: string, heroe?: Hero) {
    this.dialog.open(HeroeFormComponent, {
      data: { opcion: action, heroe: heroe },
      height: '300px',
      width: '400px',
    });
  }
}
