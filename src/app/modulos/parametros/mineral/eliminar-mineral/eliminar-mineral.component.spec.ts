import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMineralComponent } from './eliminar-mineral.component';

describe('EliminarMineralComponent', () => {
  let component: EliminarMineralComponent;
  let fixture: ComponentFixture<EliminarMineralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMineralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMineralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
