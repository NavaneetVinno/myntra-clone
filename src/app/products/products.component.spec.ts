import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent = jasmine.createSpyObj(['component']);

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  it('should get all datas', () => {
    expect(component.products).not.toBe(false);
  });
  it("should go to details page",()=>{
    expect(component.details).toBeUndefined()
  })
});
