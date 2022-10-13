import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
  western:any;
  westernText:any;
  indianWear:any;
  indianWearText:any;
  sportsWear:any;
  sportsWearText:any;
  footWear:any;
  footWearText:any;
  accessories: any;
  accessoriesText:any;

  constructor() { }

  ngOnInit(): void {
    this.western = [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10308591/2019/7/29/1b9df8fd-214e-4e8c-a0b6-759a9167e1e61564379559418-SASSAFRAS-Women-Black-A-Line-Dress-291564379558115-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13581134/2021/11/18/77d98e7f-75f2-4dcf-bea2-443a837e95b71637229080165-SASSAFRAS-Dusty-Pink-Self-Design-Dobby-Weave-Wrap-Dress--Bel-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12222036/2020/10/6/d7ae3065-98d4-42d0-b244-d2b18802ff101601959656577-SASSAFRAS-Women-Black-Solid-High-Neck-Cropped-Top-4441601959-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17491252/2022/3/11/cde512f3-1aa9-4a0e-a7fe-bc3861061b3f1647003356356VeroModaWomenBlueStraightFitHigh-RiseHighlyDistressedLightFa4.jpg",
    ]
    this.westernText = [
      "Kook N Keech Disney",
      "Tokyo Talkies",
      "Miss Chase",
      "SASSAFRAS",
      "DressBerry"
    ]
    this.indianWear = [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13169116/2021/9/1/f4743cd0-265e-4f57-8273-a5abb52501751630500433313-Libas-Women-Green-Pure-Cotton-Kurta-with-Palazzos--With-Dupa-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10356511/2019/8/8/a28f9ccb-c0d7-4e66-87f0-e639f157ff2d1565263388836-Libas-Women-Kurta-Sets-571565263387250-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12394870/2020/9/2/f4040f5f-7d16-413c-8730-e390fa3f1ece1599054216986PANITWomenYellow1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12974224/2020/12/3/426d0ea8-8ac8-4033-98e3-eeae4eb232111606973304805-Antheaa-Women-Dresses-171606973301597-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15587316/2021/9/23/7abf2d4a-8c82-4f4f-b47b-cd0fcad953a21632403630803IndianVirasatSeaGreenMaxiDress1.jpg",
    ]
    this.indianWearText = [
      "Anouk",
      "Varanga",
      "See Designs",
      "INDYA",
      "KALINI"
    ]
    this.sportsWear = [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2488701/2022/5/14/f04af975-8ea4-4bf3-89a4-7349405961631652524732958-HRX-by-Hrithik-Roshan-Women-Grey-Melange-Solid-Tights-137165-15.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11387878/2022/5/18/9bb6e8d1-d016-4494-a016-8f944b6f52361652865562058-HRX-by-Hrithik-Roshan-Women-Jet-Black-Solid-Rapid-Dry-Seamle-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12320114/2022/6/7/d5829af7-3bd2-4001-8f37-ca14fa89e0661654591011088-HRX-by-Hrithik-Roshan-White--Navy-Blue-Colourblocked-Full-Co-2.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11158166/2022/6/6/f34aad74-232b-4b68-82c1-fb206b2475b31654518709399-WKT-1432-BHRX-by-Hrithik-Roshan-Black-Colourblocked-High-Sup-7.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13314868/2022/3/14/f227a041-4894-4436-8906-1ac1c0b7342a1647263608564CultsportWomenBlueGreyPrintedTights1.jpg",
    ]
    this.sportsWearText = [
      "HRX by Hrithik Roshan",
      "BlissClub",
      "Red Tape",
      "Enamor",
      "ASIAN"
    ]
    this.footWear = [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16977254/2022/1/29/bda0a88c-225c-433c-b4f1-d3f35a3bf8a51643454490028Heels1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12304340/2020/10/9/baabae7f-f56c-405a-8ea2-1c2c29c5b39f1602215203671HouseofPataudiWomenMutedGold-TonedBraidedHandcraftedOneToeHe1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16161582/2021/11/24/7498dc8d-eeec-4067-b03d-d327aba244be1637775899770-El-Paso-Women-White-Colourblocked-Sneakers-6491637775899605-12.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19249752/2022/7/26/a2592c42-a4d9-47a8-a6c7-16f6cc6552911658817206257ShoetopiaBlackBlockPumps1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/8609443/2019/3/8/ca141a6c-51b4-4cc4-8443-8cb08b1d18491552031765933-Monrow-Women-Black-Solid-Sandals-941552031764603-1.jpg",
    ]
    this.footWearText = [
      "ZAPATOZ",
      "Vishudh",
      "Alishtezia",
      "Kiana",
      "Bata"
    ]
    this.accessories = [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16233570/2021/11/24/9e57c6bb-f1c8-435e-96ca-bd0b51b033571637774260544PANASHWomenGold1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12105744/2022/4/19/b8be800d-4298-45d0-bf53-b7465126aee41650343176085-JOKER--WITCH-Women-Black-Analogue-Watch-AMWW214-304165034317-7.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17381696/2022/3/4/066c9b6a-97ac-46ef-b537-d0800a69a3a41646400494481ToniQWomenMultiHairAccessory1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18730320/2022/6/14/423e3687-5a3f-41c0-8c6d-2345d4699f5d1655204282815Rakhi1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14206864/2021/9/15/7a2b615a-cc03-42e9-845a-ecc65eabee3f1631662853996-OOMPH-Gold-Toned--Pink--Meenakari-Enamel-Pearls-Ethnic-Jhumk-6.jpg"
    ]
    this.accessoriesText = [
      "Zaveri Pearls",
      "OOMPH",
      "Rubans",
      "Jewels Galaxy",
      "Rubans"
    ]
  }

}
