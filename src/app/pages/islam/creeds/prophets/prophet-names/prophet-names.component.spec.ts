import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProphetNamesComponent } from './prophet-names.component';

describe('ProphetNamesComponent', () => {
  let component: ProphetNamesComponent;
  let fixture: ComponentFixture<ProphetNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProphetNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProphetNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
