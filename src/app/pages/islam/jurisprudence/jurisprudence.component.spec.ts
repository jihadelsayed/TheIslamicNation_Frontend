import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurisprudenceComponent } from './jurisprudence.component';

describe('JurisprudenceComponent', () => {
  let component: JurisprudenceComponent;
  let fixture: ComponentFixture<JurisprudenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JurisprudenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JurisprudenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
