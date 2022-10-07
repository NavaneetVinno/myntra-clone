import { CarouselComponent } from "./carousel.component"

describe("CarouselComponent",()=>{
    let component = jasmine.createSpyObj(['component'])
    it("should exists",()=>{
        expect(component).toBeTruthy()
    })
    it("should contain images of length 5",()=>{
        let images = [1,2,3,4,5]
        expect(images.length).toEqual(5);
    })
})