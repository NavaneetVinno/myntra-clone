import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
// [x: string]: any;
  @Input() radios:any;
  @Input() brands:any;
  @Input() price:any;
  @Input() radioFn:any;
  @Input() brandFn:any;
  @Input() priceFn:any;
  @Input() selInd:any
  @Input() ind:any
  flag = false
  isSelected = false
  @Output() result = new EventEmitter<any>()
  @Output() range = new EventEmitter<any>()
  selectedIndex:any

  constructor(private router: Router, private service:DataServiceService) { }

  ngOnInit(): void {
  }

  gotoPage(e:any){
    const target = e.target.value;
    if(target === "option1"){
      this.router.navigate(['/men/products']);
    } else if(target === "option2"){
      this.router.navigate(['/women/products']);
    } else if(target === "option3"){
      this.router.navigate(['/kids/products'])
    }
  }

  getValue(e:any,index:number){
    if(this.ind === 0){
      const name = e.target.value;
      this.selectedIndex = e.target.checked ? index : undefined;
    
      this.flag = true;
      if(name === 'WROGN'){
        this.isSelected = true;
        this.service.getMenProducts().subscribe(data => {
          this.result.emit(data.filter(arr => arr.brand == name))
        })
      } else if(name === 'Roadster'){
          this.isSelected = true;
          this.service.getMenProducts().subscribe(data => {
            this.result.emit(data.filter(arr => arr.brand == name))
          })
      } else if(name === 'HIGHLANDER'){
          this.isSelected = true;
          this.service.getMenProducts().subscribe(data => {
            this.result.emit(data.filter(arr => arr.brand == name))
          })
      } else if(name === 'HERE&NOW'){
          this.isSelected = true;
          this.service.getMenProducts().subscribe(data => {
            this.result.emit(data.filter(arr => arr.brand == name))
          })
      } else if(name === 'Dennis Lingo'){
          this.isSelected = true;
          this.service.getMenProducts().subscribe(data => {
            this.result.emit(data.filter(arr => arr.brand == name))
          })
      } else if(name === 'Mast & Harbour'){
          this.isSelected = true;
          this.service.getMenProducts().subscribe(data => {
            this.result.emit(data.filter(arr => arr.brand == name))
          })
      } else if(name === 'The Indian Garage Co'){
          this.isSelected = true;
          this.service.getMenProducts().subscribe(data => {
            this.result.emit(data.filter(arr => arr.brand == name))
          })
      } else if(name === 'WILD WEST'){
          this.isSelected = true;
          this.service.getMenProducts().subscribe(data => {
            this.result.emit(data.filter(arr => arr.brand == name))
          })
      }
    }
    if(this.ind === 1){
      const name = e.target.value;
    this.selectedIndex = e.target.checked ? index : undefined;
    
    this.flag = true;
    if(name === 'Vishudh'){
      this.isSelected = true;
      this.service.getWomenProducts().subscribe(data => {
        this.result.emit(data.filter(arr => arr.brand == name))
      })
    } else if(name === 'FASHOR'){
      this.isSelected = true;
        this.service.getWomenProducts().subscribe(data => {
          this.result.emit(data.filter(arr => arr.brand == name))
        })
    } else if(name === 'KALINI'){
      this.isSelected = true;
        this.service.getWomenProducts().subscribe(data => {
          this.result.emit(data.filter(arr => arr.brand == name))
        })
    } else if(name === 'Libas'){
      this.isSelected = true;
        this.service.getWomenProducts().subscribe(data => {
          this.result.emit(data.filter(arr => arr.brand == name))
        })
    } else if(name === 'AHIKA'){
      this.isSelected = true;
      this.service.getWomenProducts().subscribe(data => {
        this.result.emit(data.filter(arr => arr.brand == name))
      })
    } else if(name === 'Anouk'){
      this.isSelected = true;
      this.service.getWomenProducts().subscribe(data => {
        this.result.emit(data.filter(arr => arr.brand == name))
      })
    } else if(name === 'HERE&NOW'){
      this.isSelected = true;
      this.service.getWomenProducts().subscribe(data => {
        this.result.emit(data.filter(arr => arr.brand == name))
      })
    } else if(name === 'Varanga'){
      this.isSelected = true;
      this.service.getWomenProducts().subscribe(data => {
        this.result.emit(data.filter(arr => arr.brand == name))
      })
    }
    }
    if(this.ind === 2){
      const name = e.target.value;
    this.selectedIndex = e.target.checked ? index : undefined;
    
    this.flag = true;
    if(name === 'max'){
      this.isSelected = true;
      
      this.service.getKidsProducts().subscribe(data => {
        this.result.emit(data.filter(arr => arr.brand == name))
      })
    } else if(name === 'H&M'){
      this.isSelected = true;
        this.service.getKidsProducts().subscribe(data => {
          this.result.emit(data.filter(arr => arr.brand == name))
        })
    } else if(name === 'HELLCAT'){
      this.isSelected = true;
        this.service.getKidsProducts().subscribe(data => {
          this.result.emit(data.filter(arr => arr.brand == name))
        })
    } else if(name === 'pspeaches'){
      this.isSelected = true;
        this.service.getKidsProducts().subscribe(data => {
          this.result.emit(data.filter(arr => arr.brand == name))
        })
    } else if(name === 'A.T.U.N.'){
      this.isSelected = true;
      this.service.getKidsProducts().subscribe(data => {
        this.result.emit(data.filter(arr => arr.brand == name))
      })
    } else if(name === 'Kids Ville'){
      this.isSelected = true;
      this.service.getKidsProducts().subscribe(data => {
        this.result.emit(data.filter(arr => arr.brand == name))
      })
    } else if(name === 'Naughty Ninos'){
      this.isSelected = true;
      this.service.getKidsProducts().subscribe(data => {
        this.result.emit(data.filter(arr => arr.brand == name))
      })
    } else if(name === 'CUTECUMBER'){
      this.isSelected = true;
      this.service.getKidsProducts().subscribe(data => {
        this.result.emit(data.filter(arr => arr.brand == name))
      })
    }
    }
  }

  findRange(e:any, index:number){
    if(this.ind === 0){
      const val = e.target.value;
      this.flag = true;
  
      this.selectedIndex = e.target.checked ? index : undefined;
      if(val === "Rs. 450 to Rs. 629"){
        this.isSelected = true;
        this.service.getMenProducts().subscribe(data => {
          this.range.emit(data.filter(arr => arr.price > 450 && arr.price < 629))
        })
      } else if(val === "Rs. 630 to Rs. 900"){
        this.isSelected = true;
        this.service.getMenProducts().subscribe(data => {
          this.range.emit(data.filter(arr => arr.price > 630 && arr.price < 900))
        })
      } else if(val === "Rs. 901 to Rs. 1400"){
        this.isSelected = true;
        this.service.getMenProducts().subscribe(data => {
          this.range.emit(data.filter(arr => arr.price > 901 && arr.price < 1400))
        })
      }
    }
    if(this.ind === 1){
      const val = e.target.value;
      this.flag = true;
  
      this.selectedIndex = e.target.checked ? index : undefined;
      if(val === "Rs. 250 to Rs. 600"){
        this.isSelected = true;
        this.service.getWomenProducts().subscribe(data => {
          this.range.emit(data.filter(arr => arr.price > 250 && arr.price < 600));
        })
      } else if(val === "Rs. 601 to Rs. 800"){
        this.isSelected = true;
        this.service.getWomenProducts().subscribe(data => {
          this.range.emit(data.filter(arr => arr.price > 601 && arr.price < 800));
        })
      } else if(val === "Rs. 801 to Rs. 1400"){
        this.isSelected = true;
        this.service.getWomenProducts().subscribe(data => {
          this.range.emit(data.filter(arr => arr.price > 801 && arr.price < 1400));
        })
      }
    }
    if(this.ind === 2){
      const val = e.target.value;
      this.flag = true;
  
      this.selectedIndex = e.target.checked ? index : undefined;
      if(val === "Rs. 250 to Rs. 550"){
        this.isSelected = true;
        this.service.getKidsProducts().subscribe(data => {
          this.range.emit(data.filter(arr => arr.price > 250 && arr.price < 550));
        })
      } else if(val === "Rs. 551 to Rs. 900"){
        this.isSelected = true;
        this.service.getKidsProducts().subscribe(data => {
          this.range.emit(data.filter(arr => arr.price > 551 && arr.price < 900));
        })
      } else if(val === "Rs. 901 to Rs. 1400"){
        this.isSelected = true;
        this.service.getKidsProducts().subscribe(data => {
          this.range.emit(data.filter(arr => arr.price > 901 && arr.price < 1400));
        })
      } else if(val === "Rs. 1400 to Rs. 2100"){
        this.isSelected = true;
        this.service.getKidsProducts().subscribe(data => {
          this.range.emit(data.filter(arr => arr.price > 1401 && arr.price < 2000));
        })
      }
    }
  }

}
