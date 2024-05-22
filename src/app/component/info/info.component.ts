import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../modules/personaje.models';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  personaje: Personaje = new Personaje('', '');

  ngOnInit(): void {
    this.share.currentData.subscribe((x: Personaje) => (this.personaje = x));
  }

  constructor(private share: ShareDataService) {}
}
