import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVetaComponent } from './eliminar-veta.component';

describe('EliminarVetaComponent', () => {
  let component: EliminarVetaComponent;
  let fixture: ComponentFixture<EliminarVetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarVetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarVetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
