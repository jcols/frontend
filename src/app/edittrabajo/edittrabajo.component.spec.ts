import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittrabajoComponent } from './edittrabajo.component';

describe('EdittrabajoComponent', () => {
  let component: EdittrabajoComponent;
  let fixture: ComponentFixture<EdittrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
