import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMuslimComponent } from './card-muslim.component';

describe('CardMuslimComponent', () => {
  let component: CardMuslimComponent;
  let fixture: ComponentFixture<CardMuslimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMuslimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMuslimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
