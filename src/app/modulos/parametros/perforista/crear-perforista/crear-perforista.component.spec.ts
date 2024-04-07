import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPerforistaComponent } from './crear-perforista.component';

describe('CrearPerforistaComponent', () => {
  let component: CrearPerforistaComponent;
  let fixture: ComponentFixture<CrearPerforistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPerforistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPerforistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
