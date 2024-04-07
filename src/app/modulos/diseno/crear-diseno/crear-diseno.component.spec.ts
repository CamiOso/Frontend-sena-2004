import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDisenoComponent } from './crear-diseno.component';

describe('CrearDisenoComponent', () => {
  let component: CrearDisenoComponent;
  let fixture: ComponentFixture<CrearDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDisenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
