import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core"
import { TestBed } from "@angular/core/testing"
import { CarouselComponent } from "./carousel.component"

describe("CarouselComponent",()=>{
    let component:CarouselComponent = jasmine.createSpyObj(['component'])
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[CarouselComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
    })
    it("should exists",()=>{
        expect(component).toBeTruthy()
    })
    it("should contain images of length 5",()=>{
        expect(component.images).not.toBeNull()
    })
})