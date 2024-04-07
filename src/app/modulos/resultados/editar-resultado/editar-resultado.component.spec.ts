import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarResultadoComponent } from './editar-resultado.component';

describe('EditarResultadoComponent', () => {
  let component: EditarResultadoComponent;
  let fixture: ComponentFixture<EditarResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarResultadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
