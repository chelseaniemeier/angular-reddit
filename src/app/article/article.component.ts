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
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
   }

   voteUp() {
     this.votes += 1;
   }
   voteDown(){
     this.votes -= 1;
   }

  ngOnInit() {
  }

}
