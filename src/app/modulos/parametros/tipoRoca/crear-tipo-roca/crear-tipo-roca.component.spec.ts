import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoRocaComponent } from './crear-tipo-roca.component';

describe('CrearTipoRocaComponent', () => {
  let component: CrearTipoRocaComponent;
  let fixture: ComponentFixture<CrearTipoRocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoRocaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTipoRocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
