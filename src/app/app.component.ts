import { Component, OnInit } from '@angular/core';

import { ContentDeliveryService } from './content-delivery.service';
import {ContentObject,GameObject,AppObject} from './classes/contentObject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ContentDeliveryService]
})
export class AppComponent implements OnInit {
  constructor(private contentDeliveryService: ContentDeliveryService){}

  apps: AppObject[];
  games: GameObject[];

  ngOnInit():void{
  	this.getApps();
  	this.getGames();
  }

  getApps():void{
  	this.contentDeliveryService.getApps().then(applications => this.apps = applications)
  }
  getGames():void{
  	this.contentDeliveryService.getGames().then(games => this.games = games)
  }

}
