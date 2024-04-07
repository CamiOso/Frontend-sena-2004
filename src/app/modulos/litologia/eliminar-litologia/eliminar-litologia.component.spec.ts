import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarLitologiaComponent } from './eliminar-litologia.component';

describe('EliminarLitologiaComponent', () => {
  let component: EliminarLitologiaComponent;
  let fixture: ComponentFixture<EliminarLitologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarLitologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarLitologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
