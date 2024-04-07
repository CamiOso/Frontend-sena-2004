import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlaneadorComponent } from './listar-planeador.component';

describe('ListarPlaneadorComponent', () => {
  let component: ListarPlaneadorComponent;
  let fixture: ComponentFixture<ListarPlaneadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPlaneadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPlaneadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
