import {ContentObject} from '../classes/contentObject';
import {GameObject} from '../classes/contentObject';

export const GameObjectArray: GameObject[] = [
	new GameObject(
		"Cave Paintings",
		 "./assets/cavePaintings.png",
		 "./assets/pic-cp2.png",
		 "A drawing game for struggling professors.",
		 "Your jobs as University Archaeologists are in danger! The university is facing budget cuts, and only one professor will be kept in the department! I mean, nobody was doing any research anyway, but you have to try and keep your job! Make fraudulent cave paintings depicting what ancient man was like, and have your colleagues peer review them to add to their credibility. Whomever has the most credibility at the end of the game gets tenure!",
		 "2-8",
		 "5 minutes per player",
		 ["Drawing", "Guessing"]),
	new GameObject(
		"Wise Guys and Lies",
		"./assets/wgal.png",
		"./assets/pic-wgal2.png",
		"A strategic bluffing card game.",
		"Ever wanted to be a mob boss? Take on your friends in this card game where nobody trusts you! Work from the shadows by paying off criminals and blackmailing politicians. Amass enough power to keep yourself safe and get your enemies in jail.",
		"2-5",
		"20-40",
		["Hand Management", "Bluffing", "Take That", "Player Elimination", "Variable Player Powers"]),
	new GameObject(
		"Belief in the Old Gods",
		"./assets/BITOGtitle.png",
		"./assets/pic-bitog2.png",
		"A secret scoring drafting game.",
		"The Old Gods never truly die, they slumber beath the waves and among the stars. Play as one of the eldrich abominations of the universe, twisting the minds of men to your will. The first Old God to awaken from their slumber will harken the end of days! This game is a re-themeing of Huts into the Lovecraft universe!",
		"2-5",
		"30-45 minutes",
		["Hand Manaement", "Secret Scoring", "Modular Board", "Variable Player Powers", "Grid Movement"]
		),
	new GameObject(
		"Huts",
		"./assets/huts.jpg",
		"./assets/pic-huts2.png",
		"A secret scoring drafting game.",
		"Become a god, one of a small pantheon of islander gods, as you favor the tribes that worship you and smite the ones that don't.",
		"2-5",
		"30-45 minutes",
		["Hand Manaement", "Secret Scoring", "Modular Board", "Variable Player Powers", "Grid Movement"]
		)
]