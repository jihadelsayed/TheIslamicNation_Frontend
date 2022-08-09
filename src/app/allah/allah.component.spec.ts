import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllahComponent } from './allah.component';

describe('AllahComponent', () => {
  let component: AllahComponent;
  let fixture: ComponentFixture<AllahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
