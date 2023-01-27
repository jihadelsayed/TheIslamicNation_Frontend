import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreedsComponent } from './creeds.component';

describe('CreedsComponent', () => {
  let component: CreedsComponent;
  let fixture: ComponentFixture<CreedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
