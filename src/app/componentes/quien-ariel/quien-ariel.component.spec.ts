import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienArielComponent } from './quien-ariel.component';

describe('QuienArielComponent', () => {
  let component: QuienArielComponent;
  let fixture: ComponentFixture<QuienArielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuienArielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienArielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
