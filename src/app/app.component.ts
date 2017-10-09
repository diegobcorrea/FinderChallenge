import { Component } from '@angular/core';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Frontend Finder';
  search:string = '';

  constructor( public _bs:BooksService ) {}

  autocompleListFormatter = (data: any) => {
    let html = `${data.title}`;
    return html;
  }

}
