import { async, ComponentFixture, inject, TestBed } from "@angular/core/testing";
import { Subject, subscribeOn, toArray } from "rxjs";
import { AppComponent } from "./app.component"
import { DataServiceService } from "./data-service.service";
import { HomeComponent } from "./home/home.component";
import { MenProductsComponent } from "./men/men-products/men-products.component";


describe("DataService",()=>{
    let component: AppComponent;
    let men: MenProductsComponent;
    let fixture: ComponentFixture<AppComponent>;
    let service: DataServiceService

    beforeEach(async()=>{
        TestBed.configureTestingModule({
            imports:[],
            declarations:[AppComponent,MenProductsComponent],
            providers:[DataServiceService]
        })
        fixture = TestBed.createComponent(AppComponent)
    })

    it("should create component",()=>{
        expect(fixture).toBeTruthy()
    })
    
    
})
