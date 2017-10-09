import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  catBooks: any[] = [];
  langBooks: any[] = [];
  modeBooks: any[] = [];

  constructor( public _bs:BooksService,
               public http: Http) {}

  byCategory( cat: string ) {

    this.catBooks = [];

    this.http.get('assets/data/books-schema.json')
      .subscribe( res => {

        let book = res.json();

        for ( let i = 0; i < book.data.length; i++ ) {

          let bookCat = book.data[i].categories;

          if ( bookCat.indexOf( cat ) === 0 ) {

            this.catBooks.push( book.data[i] );
            this._bs.books = this.catBooks;

          }

        }

      });

  }

  byMode( mode: string ) {

    this.modeBooks = [];

    this.http.get('assets/data/books-schema.json')
      .subscribe( res => {

        let book = res.json();

        for ( let i = 0; i < book.data.length; i++ ) {

          let bookMode = book.data[i].mode;

          if ( bookMode.indexOf( mode ) === 0 ) {

            this.modeBooks.push( book.data[i] );
            this._bs.books = this.modeBooks;

          }

        }

      });

  }

  byLanguage( lang: string ) {

    this.langBooks = [];

    this.http.get('assets/data/books-schema.json')
      .subscribe( res => {

        let book = res.json();

        for ( let i = 0; i < book.data.length; i++ ) {

          let bookLang = book.data[i].lang;

          if ( bookLang.indexOf( lang ) === 0 ) {

            this.langBooks.push( book.data[i] );
            this._bs.books = this.langBooks;

          }

        }

      });

  }

}
