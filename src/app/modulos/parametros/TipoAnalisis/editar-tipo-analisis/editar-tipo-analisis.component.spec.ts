import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoAnalisisComponent } from './editar-tipo-analisis.component';

describe('EditarTipoAnalisisComponent', () => {
  let component: EditarTipoAnalisisComponent;
  let fixture: ComponentFixture<EditarTipoAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoAnalisisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTipoAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
