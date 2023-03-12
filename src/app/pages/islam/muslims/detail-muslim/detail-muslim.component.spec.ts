import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMuslimComponent } from './detail-muslim.component';

describe('DetailMuslimComponent', () => {
  let component: DetailMuslimComponent;
  let fixture: ComponentFixture<DetailMuslimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMuslimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMuslimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
