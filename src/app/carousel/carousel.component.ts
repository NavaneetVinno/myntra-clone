import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "https://pbs.twimg.com/media/FU9qNPbakAAzT5t.jpg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "https://www.mansworldindia.com/wp-content/uploads/2020/02/Virat-Anushka-Myntra.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "https://pbs.twimg.com/media/ESaGIE-UMAEp1oV.jpg"},
    {title: 'Forth Slide', short: 'Third Slide Short', src: "https://blog.myntra.com//wp-content/uploads/2016/09/Myntra_TryAndBuy2.jpg"},
    {title: 'Fifth Slide', short: '............', src: "https://cdn.flipshope.com/blog/wp-content/uploads/2021/12/Myntra-New-Year-Sale-2022.png"}
  ];

  constructor(config: NgbCarouselConfig) { 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
