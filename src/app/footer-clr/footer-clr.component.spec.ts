import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterClrComponent } from './footer-clr.component';

describe('FooterClrComponent', () => {
  let component: FooterClrComponent;
  let fixture: ComponentFixture<FooterClrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterClrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterClrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
