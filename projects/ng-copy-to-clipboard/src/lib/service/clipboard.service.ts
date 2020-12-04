import { Injectable } from '@angular/core';

function copyToClipBoard(item, elId): void {
  if (!elId) {
    elId = 'copyToClipboard';
  }
  document.addEventListener('copy', (e) => {
    e.clipboardData.setData('text/plain', (item));
    e.preventDefault();
    document.removeEventListener('copy', null);
  });
  document.execCommand('copy');
}

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor() { }

  public copy(str: string, elId?: string): void {
    return copyToClipBoard(str, elId);
  }
}
