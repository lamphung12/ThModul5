import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTuorsComponent } from './list-tuors.component';

describe('ListTuorsComponent', () => {
  let component: ListTuorsComponent;
  let fixture: ComponentFixture<ListTuorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTuorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTuorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
