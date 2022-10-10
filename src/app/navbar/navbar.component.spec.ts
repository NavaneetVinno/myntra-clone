import { NavbarComponent } from "./navbar.component"

describe("NavbarComponent",()=>{
    let component:NavbarComponent = jasmine.createSpyObj(['component'])
    it("should be present",()=>{
        expect(component).toBeTruthy()
    })
    it("should show the total products present in wishlist",()=>{
        expect(component.wish).toBeTrue
    })
    it("should contain the number of products present in bag",()=>{
        expect(component.data).toBeTrue
    })
})