import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRocaComponent } from './listar-roca.component';

describe('ListarRocaComponent', () => {
  let component: ListarRocaComponent;
  let fixture: ComponentFixture<ListarRocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRocaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarRocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
