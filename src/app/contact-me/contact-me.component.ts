import { Component, OnInit } from '@angular/core';

var contactResources = [
	{name: "Gmail", URL:"mailto:zintismay@gmail.com",image:"../assets/gmailIcon.png",shortURL:""},
	{name: "Twitter", URL:"https://twitter.com/ZintisMay",image:"../assets/twitterIcon.png",shortURL:""},
	// {name: "LinkedIn", URL:"https://www.linkedin.com/in/zintismay/",image:"../assets/linkedInIcon.png",shortURL:""},
	// {name: "GitHub", URL:"https://github.com/ZintisMay",image:"../assets/githubIcon.png",shortURL:""}
]

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

	contactResources: Object[];

  constructor() { }

  ngOnInit() {
  	this.contactResources = contactResources;
    for(let x=0;x<this.contactResources.length;x++){
      this.contactResources[x]['shortURL'] = this.contactResources[x]['URL'].replace("mailto:","").replace("https://","");
    }
  }

}
