import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRocaComponent } from './eliminar-roca.component';

describe('EliminarRocaComponent', () => {
  let component: EliminarRocaComponent;
  let fixture: ComponentFixture<EliminarRocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarRocaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarRocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
