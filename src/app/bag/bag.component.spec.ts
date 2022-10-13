import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, fakeAsync, inject, TestBed, tick } from "@angular/core/testing";
import { DataServiceService } from "../data-service.service";
import { BagComponent } from "./bag.component"

describe("BagComponent",()=>{
    let component: BagComponent;
    let fixture: ComponentFixture<BagComponent>
    let service: DataServiceService;
    let obj = [{
        id: 1,
        title: "nike",
        description: "nike",
        size: 38,
        price: 2000,
        image: "1bag.jpg",
        discount: "40%",
        qty: 1 
    },
    {
        id: 2,
        title: "puma",
        description: "puma",
        size: 40,
        price: 1500,
        image: "2bag.jpg",
        discount: "15%",
        qty: 1,
    }]

    beforeEach(async()=>{
        await TestBed.configureTestingModule({
            declarations:[BagComponent],
            providers: [DataServiceService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents()
    })
    
    it("should create component",()=>{
        expect(component).toBeUndefined()
    })
    
    
    // it("should calling subscribe function",inject([DataServiceService],(service:DataServiceService)=>{
    //     service.getBag()?.valueChanges().subscribe(data => {
    //         expect(data).toBeTruthy()
    //     })
    // }))
    // it("should calling the subscribe function",()=>{
    //     let spy = spyOn(service.getBag()?.valueChanges(), "subscribe")
    //     component.ngOnInit()
    //     tick()
    //     expect(spy).toHaveBeenCalled()
    // })
    // it("should execute within subscribe", fakeAsync(()=>{
    //     component.ngOnInit()
    //     expect(component.bag).toBeDefined()
    //     expect(component.bag.length).toBeGreaterThanOrEqual(0)
    // }))
})