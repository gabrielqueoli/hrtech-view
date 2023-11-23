import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEntradaComponent } from './pagina-entrada.component';

describe('PaginaEntradaComponent', () => {
  let component: PaginaEntradaComponent;
  let fixture: ComponentFixture<PaginaEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEntradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});