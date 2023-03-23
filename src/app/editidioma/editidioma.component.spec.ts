import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditidiomaComponent } from './editidioma.component';

describe('EditidiomaComponent', () => {
  let component: EditidiomaComponent;
  let fixture: ComponentFixture<EditidiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditidiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditidiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
