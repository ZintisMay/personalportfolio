import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {ContentDeliveryService} from '../content-delivery.service';

import 'rxjs/add/operator/switchMap';

import {ContentObject} from '../classes/contentObject';
import {GameObject} from '../classes/contentObject';
import {AppObject} from '../classes/contentObject';
import {AppGameContentObject} from '../classes/contentObject';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {
  pageContent: AppGameContentObject;

  constructor(  	
  	private contentDeliveryService: ContentDeliveryService,
  	private route: ActivatedRoute,
  	private location: Location) {
    this.pageContent = new AppGameContentObject("","","","","","","","",[]);
  }

  ngOnInit(): void {

    function logger(x){
      console.log(x);
      return x;
    }

  	this.route.params
    .switchMap((params: Params) => 
      this.contentDeliveryService
      .getItem(params['type'], params['name']))
    .subscribe(returnContent => this.pageContent = logger(returnContent));
  }

}
