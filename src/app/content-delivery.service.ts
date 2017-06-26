import { Injectable } from '@angular/core';

import {ContentObject} from './classes/contentObject';
import {GameObject} from './classes/contentObject';
import {AppObject} from './classes/contentObject';

import {GameObjectArray} from './data/gameObjectArray';
import {ApplicationObjectArray} from './data/applicationObjectArray';

@Injectable()
export class ContentDeliveryService {

	// Currently all returns are in the form of promises, although it would also work as just a simple return. In the even that a database gets attached to the portfolio site one day, keeping the promises would make it easier to transfer over. Also practice.

	getApps(): Promise<AppObject[]>{
		return Promise.resolve(ApplicationObjectArray);
	}
	getGames(): Promise<GameObject[]>{
		return Promise.resolve(GameObjectArray);
	}
	getContent(): Promise<Object[]>{
		var consolidatedContent = [];
		for(var app in ApplicationObjectArray){
			let tempObject = {
				name: ApplicationObjectArray[app].name,
				titleImage: ApplicationObjectArray[app].titleImage,
				blurb: ApplicationObjectArray[app].blurb,
				type: "app"
			}
			consolidatedContent.push(tempObject);
		}
		for(var game in GameObjectArray){
			let tempObject = {
				name: GameObjectArray[game].name,
				titleImage: GameObjectArray[game].titleImage,
				blurb: GameObjectArray[game].blurb,
				type: "game"
			}
			consolidatedContent.push(tempObject);
		}
		return Promise.resolve(consolidatedContent);
	}
	getItem(type:string,name:string):Promise<Object>{

		let returnObject = {
			name: "Error: 404 not found",
			blurb: "Sorry about that!"
		};

		var searchThisArrayForAName = {};

		if(type == "app"){
			searchThisArrayForAName = ApplicationObjectArray;
		}else if(type=="game"){
			searchThisArrayForAName = GameObjectArray;
		}

		for(let x in searchThisArrayForAName){
			if(searchThisArrayForAName[x].name == name){
				return Promise.resolve(searchThisArrayForAName[x]);
			}
		}

		return Promise.resolve(returnObject);
	}
  constructor() { }


}
