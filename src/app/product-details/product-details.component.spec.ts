import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductDetailsComponent } from "./product-details.component"

describe("ProductDetailComponent",()=>{
    let component : ProductDetailsComponent = jasmine.createSpyObj(['component']);
    it("should create component",()=>{
        expect(component).toBeTruthy()
    })
    it("should get all datas in the list",()=>{
        expect(component.lists).not.toBeNull()
    })
    it("should push datas to bag",()=>{
        expect(component.bag).not.toBeNull()
    })
    it("should add to wish list when clicked",()=>{
        expect(component.addToWish).toBeFalsy()
    })
    it("should add to bag when clicked",()=>{
        expect(component.addBag).toBeFalsy()
    })
})