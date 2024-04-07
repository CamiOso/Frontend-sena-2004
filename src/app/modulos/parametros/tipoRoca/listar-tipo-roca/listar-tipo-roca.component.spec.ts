import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoRocaComponent } from './listar-tipo-roca.component';

describe('ListarTipoRocaComponent', () => {
  let component: ListarTipoRocaComponent;
  let fixture: ComponentFixture<ListarTipoRocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoRocaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTipoRocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
