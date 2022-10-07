import { KidsComponent } from "./kids.component"

describe("KidsComponent",()=>{
    it("should create component",()=>{
        let component = new KidsComponent;
        expect(component).toBeTruthy();
    })
    it("should contain brands array",()=>{
        let component = new KidsComponent;
        expect(component.brands).not.toBe(null)
    })
    it("should contain ionic brands",()=>{
        let component = new KidsComponent;
        expect(component.ionicBrands).not.toBe(null)
    })
    it("should contain fashion array",()=>{
        let component = new KidsComponent;
        expect(component.fasion).not.toBe(null);
    })
})