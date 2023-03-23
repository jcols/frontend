import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtrabajoComponent } from './newtrabajo.component';

describe('NewtrabajoComponent', () => {
  let component: NewtrabajoComponent;
  let fixture: ComponentFixture<NewtrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
