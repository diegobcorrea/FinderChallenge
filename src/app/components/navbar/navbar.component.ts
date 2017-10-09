import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  newBooks: any[] = [];
  title: string = 'Frontend Finder';
  search: string = '';

  constructor( public _bs: BooksService,
               private http: Http ) {}

  saveSearchValue( value: any ) {

    this.newBooks = [];

    this.http.get('assets/data/books-schema.json')
      .subscribe( res => {

        let book = res.json();

        for ( let i = 0; i < book.data.length; i++ ) {

          let bookName = book.data[i].title;

          if ( bookName.indexOf( value ) === 0 ) {

            this.newBooks.push( book.data[i] );

            this._bs.books = this.newBooks;

          }

        }

      });

  }

}
