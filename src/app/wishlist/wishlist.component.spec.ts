import { WishlistComponent } from "./wishlist.component"

describe("WishlistComponent",()=>{
    let component:WishlistComponent = jasmine.createSpyObj(['component']);
    it("should create component",()=>{
        expect(component).toBeTruthy()
    })
    it("should contain products",()=>{
        expect(component.wishProducts).not.toBeNull()
    })
    it("should show loader on false",()=>{
        expect(component.loader).toBeFalsy()
    })
})