import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteToursComponent } from './delete-tours.component';

describe('DeleteToursComponent', () => {
  let component: DeleteToursComponent;
  let fixture: ComponentFixture<DeleteToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteToursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
