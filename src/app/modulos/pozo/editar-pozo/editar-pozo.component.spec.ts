import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPozoComponent } from './editar-pozo.component';

describe('EditarPozoComponent', () => {
  let component: EditarPozoComponent;
  let fixture: ComponentFixture<EditarPozoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPozoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
