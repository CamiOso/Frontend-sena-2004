import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMuestraComponent } from './listar-muestra.component';

describe('ListarMuestraComponent', () => {
  let component: ListarMuestraComponent;
  let fixture: ComponentFixture<ListarMuestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMuestraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
