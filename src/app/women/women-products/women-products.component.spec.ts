// import { async, ComponentFixture, TestBed } from "@angular/core/testing"
// import { AngularFireModule } from "@angular/fire/compat";
// import { DataServiceService } from "src/app/data-service.service"
// import { WomenProductsComponent } from "./women-products.component"

import { ComponentFixture, TestBed } from "@angular/core/testing"
import { DataServiceService } from "src/app/data-service.service"
import { WomenProductsComponent } from "./women-products.component"

// describe("WomenProductsComponent",()=>{
//     let component: WomenProductsComponent;
//     let fixture: ComponentFixture<WomenProductsComponent>
//     beforeEach(()=>{
//         TestBed.configureTestingModule({
//             declarations: [WomenProductsComponent],
//             providers: [DataServiceService],
//             imports:[AngularFireModule]
//         }).compileComponents()
//     })
//     beforeEach(()=>{
//         fixture = TestBed.createComponent(WomenProductsComponent)
//         component = fixture.componentInstance
//         fixture.detectChanges()
//     })

//     it("should create component",()=>{
//         // expect(fixture).toBeTruthy()
//     })
// })

describe("Women Products Component",()=>{
    let comp: WomenProductsComponent;
    let fixture: ComponentFixture<WomenProductsComponent>

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[WomenProductsComponent],
            providers:[DataServiceService],
        }).compileComponents()

        fixture = TestBed.createComponent(WomenProductsComponent)
        comp = fixture.componentInstance
        fixture.detectChanges()
    })

    
})