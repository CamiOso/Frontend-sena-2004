import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlaneadorComponent } from './crear-planeador.component';

describe('CrearPlaneadorComponent', () => {
  let component: CrearPlaneadorComponent;
  let fixture: ComponentFixture<CrearPlaneadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPlaneadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPlaneadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
