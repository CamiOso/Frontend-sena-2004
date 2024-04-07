import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPerforacionComponent } from './listar-perforacion.component';

describe('ListarPerforacionComponent', () => {
  let component: ListarPerforacionComponent;
  let fixture: ComponentFixture<ListarPerforacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPerforacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPerforacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
