import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienUtnComponent } from './quien-utn.component';

describe('QuienUtnComponent', () => {
  let component: QuienUtnComponent;
  let fixture: ComponentFixture<QuienUtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuienUtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienUtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
