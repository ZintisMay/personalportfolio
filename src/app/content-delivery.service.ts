import { Injectable } from '@angular/core';

import {ContentObject} from './classes/contentObject';
import {GameObject} from './classes/contentObject';
import {AppObject} from './classes/contentObject';

const GameObjectArray: GameObject[] = [
	new GameObject(
	"Cave Paintings",
	 "./assets/cavePaintings.png",
	 "./assets/pic-cp.jpg",
	 "A drawing game for struggling professors.",
	 "Your jobs as University Archaeologists are in danger! The university is facing budget cuts, and only one professor will be kept in the department! I mean, nobody was doing any research anyway, but you have to try and keep your job! Make fraudulent cave paintings depicting what ancient man was like, and have your colleagues peer review them to add to their credibility. Whomever has the most credibility at the end of the game gets tenure!",
	 "2-8",
	 "5 minutes per player",
	 ["Drawing", "Guessing"]),
	new GameObject(
		"Wise Guys and Lies",
		"./assets/wgal.png",
		"./assets/pic-wgal.jpg",
		"A strategic bluffing card game.",
		"Ever wanted to be a mob boss? Take on your friends in this card game where nobody trusts you! Work from the shadows by paying off criminals and blackmailing politicians. Amass enough power to keep yourself safe and get your enemies in jail.",
		"2-5",
		"20-40",
		["Hand Management", "Bluffing", "Take That", "Player Elimination", "Variable Player Powers"]),
	new GameObject(
		"Belief in the Old Gods",
		"./assets/BITOGtitle.png",
		"./assets/BITOG.jpg",
		"A secret scoring drafting game.",
		"The Old Gods never truly die, they slumber beath the waves and among the stars. Play as one of the eldrich abominations of the universe, twisting the minds of men to your will. The first Old God to awaken from their slumber will harken the end of days! This game is a re-themeing of Huts into the Lovecraft universe!",
		"2-5",
		"30-45 minutes",
		["Hand Manaement", "Secret Scoring", "Modular Board", "Variable Player Powers", "Grid Movement"]
		),
	new GameObject(
		"Huts",
		"./assets/huts.jpg",
		"./assets/pic-huts.jpg",
		"A secret scoring drafting game.",
		"Become a god, one of a small pantheon of islander gods, as you favor the tribes that worship you and smite the ones that don't.",
		"2-5",
		"30-45 minutes",
		["Hand Manaement", "Secret Scoring", "Modular Board", "Variable Player Powers", "Grid Movement"]
		)
]

const ApplicationObjectArray: AppObject[] = [
	new AppObject(
		"Personal Finance Quiz",
		"./assets/PFCarkadium.png",
		"A Personal Finance quiz comparing you to the national average.",
		"A dynamic quiz embedding itself into an editorial article and using the article's content to change it's initial display. Made using Arkadium's proprietary templating tool, the Inhabit Module. Mobile and cross-browser compatible.",
		"http://testing.arkadium.com/gameexamples/interactives/personal-finance-comparison/",
		["Inhabit Module", "JQuery animate", "LESS", "Webpack", "noUiSlider"]
	),
	new AppObject(
		"Word Wars!",
		"./assets/wordwars.png",
		"An online typing game!.",
		"This is a typing game created by myself and a small team of web developent students. It features a library of words from the Wordnik API, high scores stored in MySql, fun graphic and sound design. We used Firebase for user authentication, dynamic room creation, a chat service, and multiplayer interaction. We are very proud of our product created in just a few weeks, and intend to continue working on it by adding features in the future.",
		"http://wordwarsapp.herokuapp.com",
		["Firebase", "MySql", "CSS animate", "Firebase Authentication", "Node", "Express", "Sequelize", "Handlebars", "Wordnik API"]
	),
	new AppObject(
		"Poem Comber",
		"./assets/poemComber.png",
		"An application for teachers to assign and collaborate on interpreting literature.",
		"This application was built to allow teachers and students to communally learn from and dissect literature. Students and Professors log into their accounts, where Professors will create assignments for the students to critique by clicking on passages and leaving comments. Comments are available for everyone to see. We used JSON web tokens, Node.js, Bootstrap, and MySql for storing the accounts, texts, and individual comments.",
		"https://poemcomber.herokuapp.com",
		["Node", "Express", "Sequelize", "JSON Web Tokens", "Handlebars"]
	),
	new AppObject(
		"Community Code",
		"./assets/ccode.png",
		"An application for programming students to contribute to a small library of useful programming functions, their languages, and other resources.",
		"This application is designed to give beginning programmers a library of functions they can reference, curate, and learn from. We developed this as a way to help our classroom learning as we delved into Rutgers Coding Bootcamp. Many of the students in the class contributed to it, and I found it an easy way to learn useful functions from other students.",
		"http://communitycode.herokuapp.com/",
		["JQuery", "StackOverflow API", "Reddit API", "Youtube API"]
	),
	new AppObject(
		"Your Love Life",
		"./assets/yll.png",
		"An application that makes a visual representation of your love life!",
		"In college, my friend Nik made an art-infographic for class by creating circular charts showing the dating histories of her friends and family. Your-love-life is a web-based application able to make those very same infographics. Utilizing Angular and d3.js, this application gives users a colorful look at their love lives",
		"http://your-love-life.herokuapp.com",
		["D3.js", "Twitter Bootstrap", "Angular", "Lodash"]
	),
	new AppObject(
		"Movie Quiz",
		"./assets/movieQuiz.png",
		"A dynamically generated movie star quiz.",
		"A dynamically created movie quiz application. Allows the user to look up an actor by name, and then generates 5 questions testing the user's knowledge of the actor's filmography. It uses the OMDB API, angular and node.",
		"http://ark-app.herokuapp.com/",
		["Angular", "Twitter Bootstrap", "OMDB API", "Node", "Express"]
	)

]

console.log(GameObjectArray);
console.log(ApplicationObjectArray);

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
		console.log(consolidatedContent);
		return Promise.resolve(consolidatedContent);
	}
	getItem(name:string):Promise<Object>{

		console.log(name);

		let returnObject = {
			name: "Error: 404 not found",
			blurb: "Sorry about that!"
		};

		for(let x in ApplicationObjectArray){
			if(ApplicationObjectArray[x].name == name){
				returnObject = ApplicationObjectArray[x];
			}
		}

		for(let x in GameObjectArray){
			if(GameObjectArray[x].name == name){
				returnObject = GameObjectArray[x];
			}
		}

		return Promise.resolve(returnObject);
	}
  constructor() { }


}
