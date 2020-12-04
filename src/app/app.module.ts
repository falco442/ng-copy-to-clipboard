import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgCopyToClipboardModule} from '../../projects/ng-copy-to-clipboard/src/lib/ng-copy-to-clipboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgCopyToClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
