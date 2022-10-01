import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {
  indianWear:any;
  sportsWear:any;
  footWear:any;
  accessories: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.indianWear = [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11217908/2020/5/20/81f07c58-d38c-4c7f-8481-a5f2ccfa08aa1589949943524-House-of-Pataudi-Men-White-Yoke-Design-Straight-Kurta-749158-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2019/12/13/c464f92d-c08d-472c-8b9e-48616bf737131576191650979-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/9108373/2019/3/27/f504b8ac-4cd9-4841-a727-265e713fab931553679261063-Deyann-Nehru-Jaket-Kurta-Set-5631553679259317-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12134702/2020/11/5/e8eb7f78-9a4a-4138-9525-c6ec8e7e43021604565871470-Anouk-Men-Kurta-Sets-6931604565869601-1.jpg",
      "http://assets.myntassets.com/assets/images/19092170/2022/8/9/b2f93cff-108a-48ee-8f85-6d1b501959c61660038276752-Louis-Philippe-Men-Shirts-401660038276181-1.jpg"
    ]
    this.sportsWear = [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10106341/2020/12/4/ebd42abb-c45f-4290-b8e7-073f18f3b8541607088518050-HRX-by-Hrithik-Roshan-Ultralyte-Men-Black-Solid-Running-T-sh-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17204154/2022/6/24/488f4b8e-387a-4d59-816f-054194889fe71656063286725-ADIDAS-Men-Track-Pants-1131656063286143-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15789244/2021/11/24/ce8d521b-fc47-45de-8366-7ce7102447711637746837636-Slazenger-Men-Tracksuits-1681637746836743-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17204514/2022/8/1/d783693a-de0b-4a14-99ce-12c3dc8441661659347913494-ADIDAS-Men-Track-Pants-8641659347912931-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/7231694/2022/4/18/e798f0d4-2edc-467c-975e-b43241c975bd1650284898252HRXbyHrithikRoshanMenFluorescentGreenRunningT-shirtWithRagla1.jpg"
    ]
    this.footWear = [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11097156/2019/12/10/b8d45a95-161f-442c-9e69-6997e05f25ff1575980861980-HIGHLANDER-Men-White-Sneakers-4301575980859728-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11391306/2020/2/12/10b9eea6-35be-4b7d-8c39-826d4d3500c11581485549564-US-Polo-Assn-Men-Casual-Shoes-4671581485548936-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16685220/2022/1/4/42811460-3834-4e9b-95a5-e76ee398b51c1641308301084RedTapeMenBlack1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15778982/2021/10/25/705a529a-97a1-4b60-bdf2-64bab0d151031635184404737ProvogueMenBlackSolidFormalDebys1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1341633/2019/6/25/142b5ef7-0ccd-4798-abd4-4d102a5055741561439923798-Roadster-Men-Tan-Brown-Sneakers-9201561439922157-1.jpg"
    ]
    this.accessories = [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18177188/2022/5/23/b7bf7516-df55-418f-b3a6-de001c90490c1653284224068-boAt-Airdopes-121v2-M-TWS-Earbuds-with-14-Hours-Playback-LED-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19372710/2022/8/3/fce0dc3c-5d2a-4353-8ac5-94a762ba5cbf1659530545531Watches1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14833032/2021/7/15/3afc95ea-654f-4ccb-8973-20fc3d7c30a11626349387868ShiningDivaSetOf5StylishLeatherBracelet6.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15417818/2022/9/5/15ba548f-017b-409d-b572-e7e260ee17171662394351763ZEVORAMenBrownSolidAccessoryGiftSet1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17040148/2022/2/4/aaf6d239-ebc0-4204-b18b-c7ffe0ba9b3a1643958421795-Noise-ColorFit-Qube-Oxy-Smartwatch---Deep-Wine-7431643958421-1.jpg"
    ]
  }

}
