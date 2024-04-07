import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAnalisisComponent } from './eliminar-analisis.component';

describe('EliminarAnalisisComponent', () => {
  let component: EliminarAnalisisComponent;
  let fixture: ComponentFixture<EliminarAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAnalisisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
