import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerforacionComponent } from './editar-perforacion.component';

describe('EditarPerforacionComponent', () => {
  let component: EditarPerforacionComponent;
  let fixture: ComponentFixture<EditarPerforacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPerforacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPerforacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
