export class ContentObject {
	name: string;
	titleImage:string;
	generalImage:string;
	blurb:string;
	description:string;

	constructor(name:string,
				titleImage:string,
				generalImage:string,
				blurb:string,
				description:string){
		this.name= name;
		this.titleImage=titleImage;
		this.generalImage=generalImage;
		this.blurb=blurb;
		this.description=description;
	}
}

export class GameObject extends ContentObject{
	playerCount:string;
	time:string;
	mechanics:string[];
	constructor(name:string,
				titleImage:string,
				generalImage:string,
				blurb:string,
				description:string,
				playerCount:string,
				time:string,
				mechanics:string[]){
		super(name, titleImage, generalImage, blurb, description);
		this.playerCount = playerCount;
		this.time = time;
		this.mechanics = mechanics;

	}
}

export class AppObject extends ContentObject{
	URLstring:string;
	constructor(name:string,
				titleImage:string,
				generalImage:string,
				blurb:string,
				description:string,
				URLstring:string){
		super(name, titleImage, generalImage, blurb, description);
		this.URLstring = URLstring;
	}
}