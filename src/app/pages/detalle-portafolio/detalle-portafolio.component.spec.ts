import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePortafolioComponent } from './detalle-portafolio.component';

describe('DetallePortafolioComponent', () => {
  let component: DetallePortafolioComponent;
  let fixture: ComponentFixture<DetallePortafolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePortafolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
