import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewidiomaComponent } from './newidioma.component';

describe('NewidiomaComponent', () => {
  let component: NewidiomaComponent;
  let fixture: ComponentFixture<NewidiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewidiomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewidiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
