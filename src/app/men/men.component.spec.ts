import { MenComponent } from "./men.component"

describe('MenComponent',()=>{
    beforeEach(()=>{
        let component:MenComponent = jasmine.createSpyObj(['component'])
    })
    it("should create component",()=>{
        expect(MenComponent).toBeTruthy()
    })

    it("should contain traditional indian wear", ()=>{
        let component:MenComponent;
        component = jasmine.createSpyObj(['component'])
        expect(component.indianWear).not.toBe(null)
    });

    it("should contain sports wear",()=>{
        let component:MenComponent;
        component = jasmine.createSpyObj(['component'])
        expect(component.sportsWear).not.toBe(null)
    })

    it("should contain footwear for men",()=>{
        let component:MenComponent;
        component = jasmine.createSpyObj(['component'])
        expect(component.footWear).not.toBe(null)
    })

    it("should contain accessories of all",()=>{
        let component:MenComponent;
        component = jasmine.createSpyObj(['component'])
        expect(component.accessories).not.toBe(null)
    })
})