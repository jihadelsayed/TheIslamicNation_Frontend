import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhetoricComponent } from './rhetoric.component';

describe('RhetoricComponent', () => {
  let component: RhetoricComponent;
  let fixture: ComponentFixture<RhetoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhetoricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhetoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
