export class ContentObject {
	name: string;
	titleImage:string;
	blurb:string;
	description:string;
	type:string;
	elements:string[];
	constructor(name:string,
				titleImage:string,
				blurb:string,
				description:string,
				elements: string[]){
		this.name= name;
		this.titleImage=titleImage;
		this.blurb=blurb;
		this.description=description;
		this.elements = elements;
	}
}

export class GameObject extends ContentObject{
	playerCount:string;
	time:string;
	mechanics:string[];
	generalImage:string;

	constructor(name:string,
				titleImage:string,
				generalImage:string,
				blurb:string,
				description:string,
				playerCount:string,
				time:string,
				elements:string[]){
		super(name, titleImage, blurb, description, elements);
		this.playerCount = playerCount;
		this.time = time;
		this.generalImage = generalImage;
		this.type="Game";
	}
}

export class AppObject extends ContentObject{
	URLstring:string;
	constructor(name:string,
				titleImage:string,
				blurb:string,
				description:string,
				URLstring:string,
				elements: string[]){
		super(name, titleImage, blurb, description, elements);
		this.URLstring = URLstring;
		this.type="App";
	}
}

export class AppGameContentObject extends GameObject{

	URLstring: string;
	constructor(name:string, titleImage:string, generalImage:string,blurb:string,description:string,playerCount:string,time:string,URLstring:string,elements:string[],){
		super(name,titleImage,generalImage,blurb,description,playerCount,time,elements);
		this.URLstring = URLstring;
		this.type="";

	}

}