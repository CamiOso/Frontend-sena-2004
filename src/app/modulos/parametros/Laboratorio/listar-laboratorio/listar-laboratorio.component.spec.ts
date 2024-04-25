import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLaboratorioComponent } from './listar-laboratorio.component';

describe('ListarLaboratorioComponent', () => {
  let component: ListarLaboratorioComponent;
  let fixture: ComponentFixture<ListarLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLaboratorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
