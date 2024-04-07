import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMinaComponent } from './listar-mina.component';

describe('ListarMinaComponent', () => {
  let component: ListarMinaComponent;
  let fixture: ComponentFixture<ListarMinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
