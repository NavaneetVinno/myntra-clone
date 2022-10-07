import { WomenComponent } from "./women.component"

describe("WomenComponent",()=>{
    beforeEach(()=>{
        // let component = new WomenComponent;
    })
    it("should create component",()=>{
        let component = new WomenComponent
        expect(component).toBeTruthy()
    })
    it("should contain western wear styles",()=>{
        let component = new WomenComponent
        expect(component.western).not.toBe(null)
    })
    it("should contain indian wear styles",()=>{
        let component = new WomenComponent
        expect(component.indianWear).not.toBe(null)
    })
    it("should contain sports wear styles",()=>{
        let component = new WomenComponent
        expect(component.sportsWear).not.toBe(null)
    })
    it("should contain foot wear styles",()=>{
        let component = new WomenComponent
        expect(component.footWear).not.toBe(null)
    })
    it("should contain accessories types array",()=>{
        let component = new WomenComponent
        expect(component.accessories).not.toBe(null)
    })
})