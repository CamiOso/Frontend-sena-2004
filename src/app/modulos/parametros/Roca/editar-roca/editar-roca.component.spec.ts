import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRocaComponent } from './editar-roca.component';

describe('EditarRocaComponent', () => {
  let component: EditarRocaComponent;
  let fixture: ComponentFixture<EditarRocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRocaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
