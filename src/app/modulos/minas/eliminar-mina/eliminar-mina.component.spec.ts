import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMinaComponent } from './eliminar-mina.component';

describe('EliminarMinaComponent', () => {
  let component: EliminarMinaComponent;
  let fixture: ComponentFixture<EliminarMinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
