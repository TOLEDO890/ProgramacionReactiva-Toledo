import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RickAndMortyService } from './rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  personaje$!: Observable<any>;
  personajeForm!: FormGroup;
  private subscription: Subscription = new Subscription();

  constructor(private rickAndMortyService: RickAndMortyService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.personajeForm = this.fb.group({
   
    });

    this.loadRandomPersonaje();
  }

  loadRandomPersonaje(): void {
    this.personaje$ = this.rickAndMortyService.getRandomPersonaje().pipe(
      catchError(error => {
        console.error('Error obteniendo personaje:', error);
        return [];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


