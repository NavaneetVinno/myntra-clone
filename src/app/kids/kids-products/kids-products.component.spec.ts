import { KidsProductsComponent } from "./kids-products.component"

describe("KidsProducts Component",()=>{
    let component: KidsProductsComponent = jasmine.createSpyObj(['component'])
    it("should create component",()=>{
        expect(component).toBeTruthy()
    })
    it("should return all products",()=>{
        expect(component.products).not.toBeNull()
    })
    it("should return filtered result",()=>{
        expect(component.results).not.toBeNull()
    })
    it("should have brand array",()=>{
        expect(component.filterBrands).not.toBeNull()
    })
    it("should have price array",()=>{
        expect(component.filterPrice).not.toBeNull()
    })
    it("should have radio of different pages",()=>{
        expect(component.radioFilter).not.toBeNull()
    })
    
})