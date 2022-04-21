import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './home/listing/listing.component';
import { QuickSearchComponent } from './home/quick-search/quickSearch.component';
import { SearchComponent } from './home/search/search.component';
import { discountPipe } from './Pipes/discount.pipe';
import { TextCasePipe } from './Pipes/textCase.pipe';
import { HomeService } from './services/home.service';
import { ListingService } from './services/listing.service';
import { HotelSearchPipe } from './Pipes/hotel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    QuickSearchComponent,
    FooterComponent,
    TextCasePipe,
    discountPipe,
    ListingComponent,
    HotelSearchPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'listing/:_id', component: ListingComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent }
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HomeService,
    ListingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }