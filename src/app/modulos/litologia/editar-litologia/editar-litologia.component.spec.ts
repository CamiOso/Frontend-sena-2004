import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLitologiaComponent } from './editar-litologia.component';

describe('EditarLitologiaComponent', () => {
  let component: EditarLitologiaComponent;
  let fixture: ComponentFixture<EditarLitologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarLitologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarLitologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
