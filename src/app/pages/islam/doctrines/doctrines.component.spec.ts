import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctrinesComponent } from './doctrines.component';

describe('DoctrinesComponent', () => {
  let component: DoctrinesComponent;
  let fixture: ComponentFixture<DoctrinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctrinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctrinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
