import { Component, OnInit, HostBinding } from '@angular/core';
//import { HostBinding } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  //want each article to be on its own row
  //using SemanticUI-provides class for rows called 'row'
  @HostBinding('attr.class') cssClass = 'row';
   title: string;
   link: string;
   votes: number; 

  //setting default attributes
  constructor(title:string, link:string, votes:number) {//need to add parameters^^
    this.title = title;
    this.link = link;
    this.votes = votes;
   }
//voting methods
   voteUp() {
     this.votes +=1;
     return false;
   }
   voteDown(){
     this.votes -= 1;
     return false;
   }

  ngOnInit() {
  }

}
