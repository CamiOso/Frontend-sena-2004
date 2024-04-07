import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnalisisComponent } from './listar-analisis.component';

describe('ListarAnalisisComponent', () => {
  let component: ListarAnalisisComponent;
  let fixture: ComponentFixture<ListarAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAnalisisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
