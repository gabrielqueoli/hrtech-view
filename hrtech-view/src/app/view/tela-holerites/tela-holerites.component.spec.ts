import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHoleritesComponent } from './tela-holerites.component';

describe('TelaHoleritesComponent', () => {
  let component: TelaHoleritesComponent;
  let fixture: ComponentFixture<TelaHoleritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaHoleritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaHoleritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
