import { inject, TestBed } from "@angular/core/testing"
import { DataServiceService } from "./data-service.service"

describe("Data Service",()=>{
    let service: DataServiceService
    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers:[DataServiceService]
        })
    })
   
})
