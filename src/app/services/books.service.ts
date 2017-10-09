import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BooksService {

  books: any[] = [];
  categories: any[] = [];
  edition: any[] = [];
  lang: any[] = [];
  totalItems: number = 0;
  currentPage: number = 1;
  search: string = '';
  showBooks = [];

  constructor( private http: Http ) {

    console.log( 'Servicio de libros listo para usar');
    this.load_books();

  }

  load_books() {

    this.http.get('assets/data/books-schema.json')
      .subscribe( res => {

        let book = res.json();

        this.books = book.data;
        this.totalItems = book.data.length;
        this.showBooks = book.data;

        this.categories = book.entities.categories[0];
        this.edition = book.entities.edition[0];
        this.lang = book.entities.lang[0];

      });

  }

}
