import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerforistaComponent } from './editar-perforista.component';

describe('EditarPerforistaComponent', () => {
  let component: EditarPerforistaComponent;
  let fixture: ComponentFixture<EditarPerforistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPerforistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPerforistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
