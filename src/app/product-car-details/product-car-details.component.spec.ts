import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarDetailsComponent } from './product-car-details.component';

describe('ProductCarDetailsComponent', () => {
  let component: ProductCarDetailsComponent;
  let fixture: ComponentFixture<ProductCarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
