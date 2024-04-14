import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionGeologiaComponent } from './introduccion-geologia.component';

describe('IntroduccionGeologiaComponent', () => {
  let component: IntroduccionGeologiaComponent;
  let fixture: ComponentFixture<IntroduccionGeologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduccionGeologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduccionGeologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
