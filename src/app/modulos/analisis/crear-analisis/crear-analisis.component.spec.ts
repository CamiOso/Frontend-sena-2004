import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAnalisisComponent } from './crear-analisis.component';

describe('CrearAnalisisComponent', () => {
  let component: CrearAnalisisComponent;
  let fixture: ComponentFixture<CrearAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAnalisisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
