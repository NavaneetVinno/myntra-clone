import { ComponentFixture, TestBed } from "@angular/core/testing"
import { NavbarComponent } from "./navbar.component"

describe("NavbarComponent",()=>{
    let fixture : ComponentFixture<NavbarComponent>
    it("should create component",()=>{
        let component = NavbarComponent;
        expect(component).toBeTruthy()
    })
    it("should have all navbar buttons",()=>{
        let component = NavbarComponent
        expect(component).not.toBeNull()
    })
})