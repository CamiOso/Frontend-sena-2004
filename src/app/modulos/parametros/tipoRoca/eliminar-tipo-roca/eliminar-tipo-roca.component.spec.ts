import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoRocaComponent } from './eliminar-tipo-roca.component';

describe('EliminarTipoRocaComponent', () => {
  let component: EliminarTipoRocaComponent;
  let fixture: ComponentFixture<EliminarTipoRocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTipoRocaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarTipoRocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
