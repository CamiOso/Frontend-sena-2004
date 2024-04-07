import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTrayectoriaComponent } from './crear-trayectoria.component';

describe('CrearTrayectoriaComponent', () => {
  let component: CrearTrayectoriaComponent;
  let fixture: ComponentFixture<CrearTrayectoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTrayectoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTrayectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
