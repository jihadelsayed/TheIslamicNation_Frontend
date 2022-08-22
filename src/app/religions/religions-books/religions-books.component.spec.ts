import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionsBooksComponent } from './religions-books.component';

describe('ReligionsBooksComponent', () => {
  let component: ReligionsBooksComponent;
  let fixture: ComponentFixture<ReligionsBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReligionsBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReligionsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
