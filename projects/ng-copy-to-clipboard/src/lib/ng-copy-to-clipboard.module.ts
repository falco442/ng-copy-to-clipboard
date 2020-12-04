import { NgModule } from '@angular/core';
import { NgCopyToClipboardComponent } from './ng-copy-to-clipboard.component';
import { CopyToClipboardDirective } from './directive/copy-to-clipboard.directive';
import {ClipboardService} from './service/clipboard.service';

@NgModule({
  declarations: [NgCopyToClipboardComponent, CopyToClipboardDirective],
  imports: [
  ],
  exports: [NgCopyToClipboardComponent, CopyToClipboardDirective]
})
export class NgCopyToClipboardModule { }
