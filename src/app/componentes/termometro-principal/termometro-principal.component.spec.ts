import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermometroPrincipalComponent } from './termometro-principal.component';

describe('TermometroPrincipalComponent', () => {
  let component: TermometroPrincipalComponent;
  let fixture: ComponentFixture<TermometroPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermometroPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermometroPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
