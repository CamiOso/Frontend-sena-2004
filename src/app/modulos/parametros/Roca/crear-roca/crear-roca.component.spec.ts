import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRocaComponent } from './crear-roca.component';

describe('CrearRocaComponent', () => {
  let component: CrearRocaComponent;
  let fixture: ComponentFixture<CrearRocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRocaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
