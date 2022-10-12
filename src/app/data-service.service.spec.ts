import { inject, TestBed } from "@angular/core/testing"
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { DataServiceService } from "./data-service.service"

describe("Data Service",()=>{
    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers:[DataServiceService, AngularFireDatabase]
        })
    })
   it("should create service",()=>{
        let service = DataServiceService;
        expect(service).toBeTruthy()
   })
})
