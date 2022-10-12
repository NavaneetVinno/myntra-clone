import { ComponentFixture, fakeAsync, inject, TestBed, tick, waitForAsync } from "@angular/core/testing";
import { DataServiceService } from "src/app/data-service.service";
import { MenProductsComponent } from "./men-products.component"

describe("MenProductsComponent",()=>{
    let component: MenProductsComponent = jasmine.createSpyObj(['component'])

    it("should create component",()=>{
        expect(component).toBeTruthy()
    })
    it("should contain brands array",()=>{
        expect(component.filterBrands).not.toBeNull()
    })
    it("should get all products",()=>{
        expect(component.datas).not.toBeNull()
    })
    it("should display all resulted products",()=>{
        expect(component.results).not.toBeNull()
    })
    it("should sort by price high and low",()=>{
        expect(component.selectChange).toBeUndefined()
    })
    
    it("should filter the products",()=>{
        expect(component.filterProducts).not.toBeNull()
    })
    // it("should have access to go to different pages using radio",()=>{
    //     // expect(component.radioFilter).not.toBeNull()
    //     // expect(component.radioFilter).toBe(["Men","Women","Kids"])
    // })
    
})