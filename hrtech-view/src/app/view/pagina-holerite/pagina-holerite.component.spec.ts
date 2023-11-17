import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaHoleriteComponent } from './pagina-holerite.component';

describe('PaginaHoleriteComponent', () => {
  let component: PaginaHoleriteComponent;
  let fixture: ComponentFixture<PaginaHoleriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaHoleriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaHoleriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
