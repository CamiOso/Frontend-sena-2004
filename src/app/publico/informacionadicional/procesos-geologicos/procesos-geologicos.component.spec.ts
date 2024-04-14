import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosGeologicosComponent } from './procesos-geologicos.component';

describe('ProcesosGeologicosComponent', () => {
  let component: ProcesosGeologicosComponent;
  let fixture: ComponentFixture<ProcesosGeologicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesosGeologicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesosGeologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
