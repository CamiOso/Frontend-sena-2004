import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTrayectoriaComponent } from './editar-trayectoria.component';

describe('EditarTrayectoriaComponent', () => {
  let component: EditarTrayectoriaComponent;
  let fixture: ComponentFixture<EditarTrayectoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTrayectoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTrayectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
