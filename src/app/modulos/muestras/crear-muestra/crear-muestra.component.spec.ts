import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMuestraComponent } from './crear-muestra.component';

describe('CrearMuestraComponent', () => {
  let component: CrearMuestraComponent;
  let fixture: ComponentFixture<CrearMuestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMuestraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
