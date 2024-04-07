import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMineralComponent } from './listar-mineral.component';

describe('ListarMineralComponent', () => {
  let component: ListarMineralComponent;
  let fixture: ComponentFixture<ListarMineralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMineralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMineralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
