import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamPillarsComponent } from './islam-pillars.component';

describe('IslamPillarsComponent', () => {
  let component: IslamPillarsComponent;
  let fixture: ComponentFixture<IslamPillarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslamPillarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IslamPillarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
