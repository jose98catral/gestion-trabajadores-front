import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirTrabajadorComponent } from './anadir-trabajador.component';

describe('AnadirTrabajadorComponent', () => {
  let component: AnadirTrabajadorComponent;
  let fixture: ComponentFixture<AnadirTrabajadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirTrabajadorComponent]
    });
    fixture = TestBed.createComponent(AnadirTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
