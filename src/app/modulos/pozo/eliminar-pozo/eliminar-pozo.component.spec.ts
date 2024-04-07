import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPozoComponent } from './eliminar-pozo.component';

describe('EliminarPozoComponent', () => {
  let component: EliminarPozoComponent;
  let fixture: ComponentFixture<EliminarPozoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPozoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
