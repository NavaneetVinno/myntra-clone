import { CommonModule } from "@angular/common";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { BagComponent } from "../bag/bag.component";
import { HomeComponent } from "../home/home.component";
import { KidsComponent } from "../kids/kids.component";
import { MenComponent } from "../men/men.component";
import { ProfileComponent } from "../profile/profile.component";
import { WishlistComponent } from "../wishlist/wishlist.component";
import { WomenComponent } from "../women/women.component";
import { NavbarComponent } from "./navbar.component"

describe("NavbarComponent",()=>{
    let comp: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>
    let router: Router

    const routes = [
        { path: '', component: HomeComponent },
        { path: 'men', component: MenComponent},
        { path: 'women', component: WomenComponent },
        { path: 'kids', component: KidsComponent },
        {path: 'wishlist', component: WishlistComponent},
        {path: 'bag', component: BagComponent},
        {path: 'profile', component: ProfileComponent}
    ]

    beforeEach(async()=>{
        await TestBed.configureTestingModule({
           declarations: [NavbarComponent],
           providers: [],
           imports: [
            CommonModule,
            RouterTestingModule.withRoutes(routes),
           ] 
        }).compileComponents()

        router = TestBed.inject(Router)
        spyOn(router, 'navigate').and.returnValue(Promise.resolve(true))
    })
    beforeEach(()=>{
        fixture = TestBed.createComponent(NavbarComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
        router.initialNavigation()
    })
    
    
})