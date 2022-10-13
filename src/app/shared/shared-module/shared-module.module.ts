import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/footer/footer.component';
import { CarouselComponent } from 'src/app/carousel/carousel.component';



@NgModule({
  declarations: [
    FooterComponent,
    // CarouselComponent
  ],
  exports: [
    FooterComponent,
    // CarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
