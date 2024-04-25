import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarLaboratorioComponent } from './eliminar-laboratorio.component';

describe('EliminarLaboratorioComponent', () => {
  let component: EliminarLaboratorioComponent;
  let fixture: ComponentFixture<EliminarLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarLaboratorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
