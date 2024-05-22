import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Personaje } from '../../modules/personaje.models';
import { ShareDataService } from '../../services/share-data.service';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [ReactiveFormsModule, PersonajeComponent, InfoComponent],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.scss',
})
export class PersonajeComponent {
  selectedPersonaje = new FormControl();

  personajes = [
    new Personaje('wolverine', 'wolverine.jpg'),
    new Personaje('beast', 'beast.webp'),
    new Personaje('ciclope', 'ciclople.jpg'),
    new Personaje('storm', 'storm.png'),
  ];

  constructor(private share: ShareDataService) {}

  grabarPersonaje() {
    this.share.setData(
      new Personaje(
        this.personajes
          .findIndex((x) => x.nombre === this.selectedPersonaje.value)
          .toString(),
        this.selectedPersonaje.value
      )
    );
  }
}
