import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoAnalisisComponent } from './eliminar-tipo-analisis.component';

describe('EliminarTipoAnalisisComponent', () => {
  let component: EliminarTipoAnalisisComponent;
  let fixture: ComponentFixture<EliminarTipoAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTipoAnalisisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarTipoAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
