import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMineralComponent } from './editar-mineral.component';

describe('EditarMineralComponent', () => {
  let component: EditarMineralComponent;
  let fixture: ComponentFixture<EditarMineralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMineralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMineralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
