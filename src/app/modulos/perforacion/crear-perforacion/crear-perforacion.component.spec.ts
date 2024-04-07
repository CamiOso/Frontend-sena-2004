import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPerforacionComponent } from './crear-perforacion.component';

describe('CrearPerforacionComponent', () => {
  let component: CrearPerforacionComponent;
  let fixture: ComponentFixture<CrearPerforacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPerforacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPerforacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
