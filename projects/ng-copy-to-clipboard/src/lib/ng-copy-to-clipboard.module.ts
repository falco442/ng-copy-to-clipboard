import { NgModule } from '@angular/core';
import { NgCopyToClipboardComponent } from './ng-copy-to-clipboard.component';
import { CopyToClipboardDirective } from './directive/copy-to-clipboard.directive';
import {ClipboardService} from './service/clipboard.service';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NgCopyToClipboardComponent, CopyToClipboardDirective],
  imports: [
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [NgCopyToClipboardComponent, CopyToClipboardDirective]
})
export class NgCopyToClipboardModule { }
