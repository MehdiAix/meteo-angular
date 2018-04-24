import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo-resultat',
  templateUrl: './meteo-resultat.component.html',
  styleUrls: ['./meteo-resultat.component.css']
})
export class MeteoResultatComponent implements OnInit {
infos = {
  temeprature: 15,
  description: 'nuageux',
  icone: 'wi-wi-day-rain'
};
  constructor() { }

  ngOnInit() {
  }

}
