import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLitologiaComponent } from './crear-litologia.component';

describe('CrearLitologiaComponent', () => {
  let component: CrearLitologiaComponent;
  let fixture: ComponentFixture<CrearLitologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearLitologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearLitologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
