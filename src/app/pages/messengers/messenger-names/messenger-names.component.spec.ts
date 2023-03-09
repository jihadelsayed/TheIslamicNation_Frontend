import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerNamesComponent } from './messenger-names.component';

describe('MessengerNamesComponent', () => {
  let component: MessengerNamesComponent;
  let fixture: ComponentFixture<MessengerNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessengerNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
