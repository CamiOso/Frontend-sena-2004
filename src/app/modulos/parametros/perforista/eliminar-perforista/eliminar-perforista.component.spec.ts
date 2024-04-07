import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPerforistaComponent } from './eliminar-perforista.component';

describe('EliminarPerforistaComponent', () => {
  let component: EliminarPerforistaComponent;
  let fixture: ComponentFixture<EliminarPerforistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPerforistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPerforistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
