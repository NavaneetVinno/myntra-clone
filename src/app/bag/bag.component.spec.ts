import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { async } from "@firebase/util";
import { of } from "rxjs/internal/observable/of";
// import { of } from "rxjs";
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

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[BagComponent],
            providers: [DataServiceService]
        }).compileComponents()
    })
    
    it("should create component",()=>{
        expect(component).toBeUndefined()
    })

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