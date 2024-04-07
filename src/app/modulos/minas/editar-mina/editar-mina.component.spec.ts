import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMinaComponent } from './editar-mina.component';

describe('EditarMinaComponent', () => {
  let component: EditarMinaComponent;
  let fixture: ComponentFixture<EditarMinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
