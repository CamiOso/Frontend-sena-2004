import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVetaComponent } from './crear-veta.component';

describe('CrearVetaComponent', () => {
  let component: CrearVetaComponent;
  let fixture: ComponentFixture<CrearVetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearVetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearVetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
