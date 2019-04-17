import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienProgComponent } from './quien-prog.component';

describe('QuienProgComponent', () => {
  let component: QuienProgComponent;
  let fixture: ComponentFixture<QuienProgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuienProgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
