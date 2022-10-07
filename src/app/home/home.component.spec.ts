import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component"

describe('HomeComponent', () => {
    let component : HomeComponent;
    let fixture : ComponentFixture<HomeComponent>
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeComponent]
        }).compileComponents()
    })
    beforeEach(()=>{
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it("should create component", ()=>{
        expect(component).toBeTruthy()
    })

    it('should contain deals array',()=>{
        expect(component.dealsArr).toHaveSize(9)
    })

    it('should contain trends of women', ()=>{
        expect(component.trendsHer).toHaveSize(8)
    })

    it('should contain trends of men', ()=>{
        expect(component.trendsHim).toHaveSize(8)
    })

    it('should contain trends of kids', ()=>{
        expect(component.kids).toHaveSize(7)
    })
})