import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTrayectoriaComponent } from './listar-trayectoria.component';

describe('ListarTrayectoriaComponent', () => {
  let component: ListarTrayectoriaComponent;
  let fixture: ComponentFixture<ListarTrayectoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTrayectoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTrayectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
