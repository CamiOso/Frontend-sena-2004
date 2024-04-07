import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoAnalisisComponent } from './listar-tipo-analisis.component';

describe('ListarTipoAnalisisComponent', () => {
  let component: ListarTipoAnalisisComponent;
  let fixture: ComponentFixture<ListarTipoAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoAnalisisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTipoAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
