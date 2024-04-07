import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarResultadoComponent } from './listar-resultado.component';

describe('ListarResultadoComponent', () => {
  let component: ListarResultadoComponent;
  let fixture: ComponentFixture<ListarResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarResultadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
