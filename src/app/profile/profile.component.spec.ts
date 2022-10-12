import { ComponentFixture, TestBed } from "@angular/core/testing"
import { DataServiceService } from "../data-service.service"
import { ProfileComponent } from "./profile.component"

describe("Profile Component",()=>{
    let component = ProfileComponent
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[ProfileComponent],
            providers:[DataServiceService]
        }).compileComponents()
    })
    it("should create component",()=>{
        expect(component).toBeTruthy()
    })
    it("should have length",()=>{
        let comp = ProfileComponent;
        expect(comp.length).toBeGreaterThanOrEqual(0)
    })
    
})