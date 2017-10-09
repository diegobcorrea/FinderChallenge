import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResultsComponent } from './components/results/results.component';

import { NgxPaginationModule } from 'ngx-pagination';

// Services
import { BooksService } from './services/books.service';
import { SearchfilterPipe } from './pipe/searchfilter.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { KeysPipe } from './pipe/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResultsComponent,
    SearchfilterPipe,
    SidebarComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
