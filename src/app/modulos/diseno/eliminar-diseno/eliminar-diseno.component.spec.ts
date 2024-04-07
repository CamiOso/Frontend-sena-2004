import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDisenoComponent } from './eliminar-diseno.component';

describe('EliminarDisenoComponent', () => {
  let component: EliminarDisenoComponent;
  let fixture: ComponentFixture<EliminarDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarDisenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
