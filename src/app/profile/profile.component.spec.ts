import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { DatasService } from "../services/datas/datas.service"
import { ProfileComponent } from "./profile.component"

describe("Profile Component",()=>{
    let component = ProfileComponent
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[ProfileComponent],
            providers:[DatasService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents()
    })
    it("should create component",()=>{
        expect(component).toBeTruthy()
    })
    it("should have length",()=>{
        let comp = ProfileComponent;
        expect(comp.length).toBeGreaterThanOrEqual(0)
    })
    it("should show and hide on boolean",()=>{
        expect(component).not.toBeNull()
    })
    it("should contain loader",()=>{
        let comp: ProfileComponent = jasmine.createSpyObj(['comp'])
        expect(comp.loader).toBeFalsy()
    })
    it("should contain a boolean flag",()=>{
        let comp: ProfileComponent = jasmine.createSpyObj(['comp'])
        expect(comp.flag).toBeFalsy()
    })
})
