import { Component } from '@angular/core';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  constructor( public _bs:BooksService ) {}

}
