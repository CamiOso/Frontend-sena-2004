import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVetaComponent } from './listar-veta.component';

describe('ListarVetaComponent', () => {
  let component: ListarVetaComponent;
  let fixture: ComponentFixture<ListarVetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarVetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
