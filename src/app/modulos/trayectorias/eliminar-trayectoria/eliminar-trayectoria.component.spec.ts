import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTrayectoriaComponent } from './eliminar-trayectoria.component';

describe('EliminarTrayectoriaComponent', () => {
  let component: EliminarTrayectoriaComponent;
  let fixture: ComponentFixture<EliminarTrayectoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTrayectoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarTrayectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
