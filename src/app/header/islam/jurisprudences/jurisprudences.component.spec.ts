import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurisprudencesComponent } from './jurisprudences.component';

describe('JurisprudencesComponent', () => {
  let component: JurisprudencesComponent;
  let fixture: ComponentFixture<JurisprudencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JurisprudencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JurisprudencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
