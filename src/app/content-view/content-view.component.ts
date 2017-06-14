import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {ContentDeliveryService} from '../content-delivery.service';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {
  pageContent: Object;

  constructor(  	
  	private contentDeliveryService: ContentDeliveryService,
  	private route: ActivatedRoute,
  	private location: Location) {}

  ngOnInit(): void {
  	// QQQ
  	this.route.params
    .switchMap((params: Params) => this.contentDeliveryService.getItem(params['name']))
    .subscribe(returnContent => this.pageContent = returnContent);
  }

}
