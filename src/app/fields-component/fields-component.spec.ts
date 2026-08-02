import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsComponent } from './fields-component';

describe('FieldsComponent', () => {
  let component: FieldsComponent;
  let fixture: ComponentFixture<FieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
