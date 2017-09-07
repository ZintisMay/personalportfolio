import {ContentObject} from '../classes/contentObject';
import {AppObject} from '../classes/contentObject';

export const ApplicationObjectArray: AppObject[] = [
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
		"An online typing game!",
		"This is a typing game created by myself and a small team of web developent students. It features a library of words from the Wordnik API, high scores stored in MySql, fun graphic and sound design. We used Firebase for user authentication, dynamic room creation, a chat service, and multiplayer interaction. We are very proud of our product created in just a few weeks, and intend to continue working on it by adding features in the future.",
		"http://wordwarsapp.herokuapp.com",
		["Firebase", "MySql", "CSS animate", "Firebase Authentication", "Node", "Express", "Sequelize", "Handlebars", "Wordnik API"]
	),
	new AppObject(
		"Poem Comber",
		"./assets/poemComber.png",
		"An application for teachers to assign and collaborate on interpreting literature.",
		"This application was built to allow teachers and students to communally learn from and dissect literature. Students and Professors log into their accounts, where Professors will create assignments for the students to critique by clicking on passages and leaving comments. Comments are available for everyone to see.",
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
		"In college, my friend Nik made an art-infographic for class by creating circular charts showing the dating histories of her friends and family. Your-love-life is a web-based application able to make those very same infographics, giving users a colorful look at their love lives",
		"http://your-love-life.herokuapp.com",
		["D3.js", "Twitter Bootstrap", "Angular", "Lodash"]
	),
	new AppObject(
		"Movie Quiz",
		"./assets/movieQuiz.png",
		"A dynamically generated movie star quiz.",
		"A dynamically created movie quiz application. Allows the user to look up an actor by name, and then generates 5 questions testing the user's knowledge of the actor's filmography. Fun little side project to help me practice using angular.",
		"http://ark-app.herokuapp.com/",
		["Angular", "Twitter Bootstrap", "OMDB API", "Node", "Express"]
	)

]