import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPerforacionComponent } from './eliminar-perforacion.component';

describe('EliminarPerforacionComponent', () => {
  let component: EliminarPerforacionComponent;
  let fixture: ComponentFixture<EliminarPerforacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPerforacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPerforacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
