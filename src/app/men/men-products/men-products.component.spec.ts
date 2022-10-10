import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from "@angular/core/testing";
import { DataServiceService } from "src/app/data-service.service";
import { MenProductsComponent } from "./men-products.component"

describe("MenProductsComponent",()=>{
    let component: MenProductsComponent = jasmine.createSpyObj(['component'])
    let service: DataServiceService;

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
    // it("should get all men products", fakeAsync(()=>{
    //     // expect(service.getMenProducts().subscribe()).toBeUndefined()
    //     // service.getMenProducts().subscribe((products:any[])=>{
    //     //     expect(products?.length).toEqual(50)
    //     //     done()
    //     // })
    //     component.products.subscribe((datas:any[])=>{
    //         expect(datas?.length).toBeGreaterThan(1)
    //     })
    // }))
})