import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityPageComponent } from './clarity-page.component';

describe('ClarityPageComponent', () => {
  let component: ClarityPageComponent;
  let fixture: ComponentFixture<ClarityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClarityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
