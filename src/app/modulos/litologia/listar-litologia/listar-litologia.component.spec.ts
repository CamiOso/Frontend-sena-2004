import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLitologiaComponent } from './listar-litologia.component';

describe('ListarLitologiaComponent', () => {
  let component: ListarLitologiaComponent;
  let fixture: ComponentFixture<ListarLitologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLitologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarLitologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
