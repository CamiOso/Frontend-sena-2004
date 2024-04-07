import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMinaComponent } from './crear-mina.component';

describe('CrearMinaComponent', () => {
  let component: CrearMinaComponent;
  let fixture: ComponentFixture<CrearMinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
