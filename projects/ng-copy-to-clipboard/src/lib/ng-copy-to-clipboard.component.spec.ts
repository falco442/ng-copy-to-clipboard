import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCopyToClipboardComponent } from './ng-copy-to-clipboard.component';

describe('NgCopyToClipboardComponent', () => {
  let component: NgCopyToClipboardComponent;
  let fixture: ComponentFixture<NgCopyToClipboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCopyToClipboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCopyToClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
