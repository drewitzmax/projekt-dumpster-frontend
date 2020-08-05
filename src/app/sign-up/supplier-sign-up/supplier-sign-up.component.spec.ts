import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSignUpComponent } from './supplier-sign-up.component';

describe('SupplierSignUpComponent', () => {
  let component: SupplierSignUpComponent;
  let fixture: ComponentFixture<SupplierSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
