import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private service:ToastrService) { }

  successMessage(data:string){
    this.service.success(data)
  }

  errorMessage(data:string){
    this.service.error(data)
  }

  infoMessage(data:string){
    this.service.info(data)
  }

  warningMessage(data:string){
    this.service.warning(data)
  }
}
