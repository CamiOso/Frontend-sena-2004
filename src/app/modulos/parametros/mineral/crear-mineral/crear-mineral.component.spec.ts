import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMineralComponent } from './crear-mineral.component';

describe('CrearMineralComponent', () => {
  let component: CrearMineralComponent;
  let fixture: ComponentFixture<CrearMineralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMineralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMineralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
