import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPerforistaComponent } from './listar-perforista.component';

describe('ListarPerforistaComponent', () => {
  let component: ListarPerforistaComponent;
  let fixture: ComponentFixture<ListarPerforistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPerforistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPerforistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
