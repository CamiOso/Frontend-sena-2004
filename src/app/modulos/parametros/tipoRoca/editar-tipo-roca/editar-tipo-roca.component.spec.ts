import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoRocaComponent } from './editar-tipo-roca.component';

describe('EditarTipoRocaComponent', () => {
  let component: EditarTipoRocaComponent;
  let fixture: ComponentFixture<EditarTipoRocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoRocaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTipoRocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
