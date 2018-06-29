import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatetimeformatPipe } from './pipes/datetimeformat/datetimeformatpipe.pipe';
import { DateformatPipe } from './pipes/dateformat/datepipe.pipe';
import { NumberformatPipe } from './pipes/numberformat/numberformat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateformatPipe,
    DatetimeformatPipe,
    NumberformatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
