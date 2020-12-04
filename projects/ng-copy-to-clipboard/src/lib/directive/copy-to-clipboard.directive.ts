import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {ClipboardService} from '../service/clipboard.service';
import {ToastrService} from 'ngx-toastr';

@Directive({
  selector: '[libCopyToClipboard]',
})
export class CopyToClipboardDirective {

  @Input('libCopyToClipboard')
  public copyToClipBoard: any;

  @Input('copyToClipboardCallback')
  public callback: (par?: any) => string;

  @Input()
  public copiedString = 'Copiato negli Appunti';

  @Input()
  public copyString = 'Copia';

  private newEl: any;

  private originalBorder: string;
  private originalOutlineOffset: string;

  constructor(
    public el: ElementRef,
    private clipboard: ClipboardService,
    private toastr: ToastrService,
    private rendered: Renderer2,
  ) {
    el.nativeElement.style.cursor = 'copy';
    this.originalBorder = this.el.nativeElement.style.border;
    this.originalOutlineOffset = this.el.nativeElement.style.outlineOffset;
    this.rendered.setStyle(el.nativeElement, 'position', 'relative');
    this.toastr.toastrConfig.timeOut = 1000;
    this.newEl = this.rendered.createElement('div');
    const text = this.rendered.createText(this.copyString);
    this.rendered.appendChild(this.newEl, text);
    this.rendered.appendChild(this.el.nativeElement, this.newEl);
    this.rendered.setStyle(this.newEl, 'background-color', 'lightgray');
    this.rendered.setStyle(this.newEl, 'position', 'absolute');
    this.rendered.setStyle(this.newEl, 'right', '0px');
    this.rendered.setStyle(this.newEl, 'top', '0px');
    this.rendered.setStyle(this.newEl, 'padding', '3px');
    this.rendered.setStyle(this.newEl, 'display', 'inline');
    this.rendered.setStyle(this.newEl, 'z-index', '100');
    this.rendered.setStyle(this.newEl, 'max-height', '100%');
    this.rendered.setStyle(this.newEl, 'font-size', '12px');
    this.rendered.setStyle(this.newEl, 'display', 'none');
  }

  @HostListener('click', ['$event.target'])
  private onClick(): void {
    let str: string;
    const fn = (): string => {
      if (this.callback) {
        return this.callback(this.copyToClipBoard);
      }
      return this.copyToClipBoard.toString();
    };
    str = fn();
    this.clipboard.copy(str);
    this.toastr.show(this.copiedString);
  }

  // @HostListener('mouseenter', ['$event.target'])
  // createDiv() {
  //   LoggingService.log('test');
  // }

  @HostListener('mouseover', ['$event.target'])
  private createDiv(): void {
    this.rendered.setStyle(this.newEl, 'display', 'block');
    this.rendered.setStyle(this.el.nativeElement, 'outline', '1px solid lightgray');
    this.rendered.setStyle(this.el.nativeElement, 'outline-offset', '-1px');
  }

  @HostListener('mouseout', ['$event.target'])
  private deleteDiv(): void {
    this.rendered.setStyle(this.newEl, 'display', 'none');
    this.rendered.setStyle(this.el.nativeElement, 'outline', this.originalBorder);
    this.rendered.setStyle(this.el.nativeElement, 'outline-offset', this.originalOutlineOffset);
  }
}
