import { Component, OnInit, Input } from '@angular/core';
import { ContentDeliveryService } from '../content-delivery.service';
import {ContentObject,GameObject,AppObject} from '../classes/contentObject';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  providers:[ContentDeliveryService]	
})
export class WelcomePageComponent implements OnInit {

  constructor(private contentDeliveryService: ContentDeliveryService) { }

  content: Object[];

  ngOnInit():void {
  	this.getContent();
  }
  getContent():void{
  	this.contentDeliveryService.getContent().then(content => this.content = content);   
  }

}
