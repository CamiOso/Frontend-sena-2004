import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVetaComponent } from './editar-veta.component';

describe('EditarVetaComponent', () => {
  let component: EditarVetaComponent;
  let fixture: ComponentFixture<EditarVetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarVetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
