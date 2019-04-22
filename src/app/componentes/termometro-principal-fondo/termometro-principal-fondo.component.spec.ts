import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermometroPrincipalFondoComponent } from './termometro-principal-fondo.component';

describe('TermometroPrincipalFondoComponent', () => {
  let component: TermometroPrincipalFondoComponent;
  let fixture: ComponentFixture<TermometroPrincipalFondoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermometroPrincipalFondoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermometroPrincipalFondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
