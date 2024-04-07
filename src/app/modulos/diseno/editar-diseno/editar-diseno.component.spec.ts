import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDisenoComponent } from './editar-diseno.component';

describe('EditarDisenoComponent', () => {
  let component: EditarDisenoComponent;
  let fixture: ComponentFixture<EditarDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDisenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
