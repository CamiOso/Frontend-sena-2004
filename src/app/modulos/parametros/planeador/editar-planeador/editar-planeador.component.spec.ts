import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlaneadorComponent } from './editar-planeador.component';

describe('EditarPlaneadorComponent', () => {
  let component: EditarPlaneadorComponent;
  let fixture: ComponentFixture<EditarPlaneadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPlaneadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPlaneadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
