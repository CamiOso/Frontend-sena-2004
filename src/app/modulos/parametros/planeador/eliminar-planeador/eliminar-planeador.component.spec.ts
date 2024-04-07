import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPlaneadorComponent } from './eliminar-planeador.component';

describe('EliminarPlaneadorComponent', () => {
  let component: EliminarPlaneadorComponent;
  let fixture: ComponentFixture<EliminarPlaneadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPlaneadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPlaneadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
