import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { async, inject, TestBed } from "@angular/core/testing"
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { DataServiceService } from "./data-service.service"

describe("Data Service",()=>{
    beforeEach(async()=>{
        await TestBed.configureTestingModule({
            providers:[DataServiceService, AngularFireDatabase],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
    })
   it("should create service",()=>{
        let service = DataServiceService;
        expect(service).toBeTruthy()
   })
   it("")
})
