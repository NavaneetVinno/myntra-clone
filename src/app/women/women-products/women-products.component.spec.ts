import { DataServiceService } from 'src/app/data-service.service';
import { WomenProductsComponent } from './women-products.component';

describe('Women Products Component', () => {
  let component: WomenProductsComponent = jasmine.createSpyObj(['component']);
  let service: DataServiceService = jasmine.createSpyObj(['service'])
  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  it('should have brands array', () => {
    expect(component.filterBrands).not.toBeNull();
  });
  it('should have different prices array', () => {
    expect(component.filterPrice).not.toBeNull();
  });
  it('should return all datas', () => {
    expect(component.products).not.toBeNull();
  });
  it('should get all filtered result data', () => {
    expect(component.results).not.toBeNull();
  });
  it('should contain radio filter array', () => {
    expect(component.radioFilter).not.toBeTruthy();
  });
  it("should not have selected index",()=>{
    expect(component.selectedIndex).toBeFalsy()
  })
  it("should contain length of 50 results",()=>{
    expect(component.products).toBeFalsy()
  })
  
});
