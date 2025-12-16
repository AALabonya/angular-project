import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponents } from './products';

describe('Products', () => {
  let component: ProductListComponents;
  let fixture: ComponentFixture<ProductListComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
