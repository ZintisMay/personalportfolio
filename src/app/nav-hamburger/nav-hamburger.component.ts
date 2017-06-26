import { Component, OnInit } from '@angular/core';
import { ContentDeliveryService } from '../content-delivery.service';
import {ContentObject,GameObject,AppObject} from '../classes/contentObject';

@Component({
  selector: 'app-nav-hamburger',
  templateUrl: './nav-hamburger.component.html',
  styleUrls: ['./nav-hamburger.component.css'],
  providers:[ContentDeliveryService]	
})
export class NavHamburgerComponent implements OnInit {
  constructor(private contentDeliveryService: ContentDeliveryService) { }

  apps: AppObject[];
  games: GameObject[];

  ngOnInit():void {
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
