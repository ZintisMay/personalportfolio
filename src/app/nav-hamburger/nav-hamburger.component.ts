import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../classes/menuItem';

const MENUITEMS: MenuItem[] = [
	{
		name:"Belief in the Old Gods", 
		img: "../assets/BITOGtitle.png", 
		type:"boardGame",
		pitch: "A game about the Old Gods and the cultists who love them.",
		time: "20-40 minutes",
		players: "2-5",
		categories:["Hand Management", "Secret Scoring", "Module Board", "Variable Player Powers", "Grid Movement"],
		description:"The Old Gods never truly die, they slumber beath the waves and among the stars. Play as one of the eldrich abominations of the universe, twisting the minds of men to your will. The first Old God to awaken from their slumber will harken the end of days! This game is a re-themeing of Huts into the Lovecraft universe!"
	},
	{
		name:"Belief in the Old Gods", 
		img: "../assets/BITOGtitle.png", 
		type:"boardGame",
		pitch: "A game about the Old Gods and the cultists who love them.",
		time: "20-40 minutes",
		players: "2-5",
		categories:["Hand Management", "Secret Scoring", "Module Board", "Variable Player Powers", "Grid Movement"],
		description:"The Old Gods never truly die, they slumber beath the waves and among the stars. Play as one of the eldrich abominations of the universe, twisting the minds of men to your will. The first Old God to awaken from their slumber will harken the end of days! This game is a re-themeing of Huts into the Lovecraft universe!"
	}
]

@Component({
  selector: 'app-nav-hamburger',
  templateUrl: './nav-hamburger.component.html',
  styleUrls: ['./nav-hamburger.component.css']
})
export class NavHamburgerComponent implements OnInit {
  menuItems: MenuItem[] = MENUITEMS;
  constructor() { }

  ngOnInit() {
  }

}
