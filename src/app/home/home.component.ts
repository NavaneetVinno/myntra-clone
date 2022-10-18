import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dealsArr:any;

  topPics:any;
  picsText:any;
  trendsHer:any;
  herText:any;
  trendsHim:any;
  himText:any;
  kids:any;
  kidsText:any;

  constructor() { }

  ngOnInit(): void {
    this.dealsArr = [
      "https://scontent.fblr24-1.fna.fbcdn.net/v/t1.6435-9/123796432_10159307310348221_4351058473770506895_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3-AihPk8R0AAX_Rsx51&_nc_ht=scontent.fblr24-1.fna&oh=00_AT_jygmIgc0LMX2mtcD0Ki5SV6LxnQYNE7S3k-d1RU8hNA&oe=634E0480",
      "https://www.nepaloffers.com/public/offer/6E7D678F7CA3DC5-offer.jpg",
      "https://mir-s3-cdn-cf.behance.net/projects/404/61b18b151868897.Y3JvcCwxMjczLDk5Niw2Myww.png",
      "https://www.savemoneyindia.com/wp-content/uploads/2021/12/myntra-pay-300x262.jpg",
      "https://businesswireindia.com/Handler/ThumbNailImage.ashx?imgpath=https://cms.businesswireindia.com/Uploads/news-multimedia/images/myntraimage_73813.png&width=700",
      "https://qph.cf2.quoracdn.net/main-qimg-2fa256dc9106d589463936b68ccabc9d-lq",
      "https://www.zingoy.com/blog/wp-content/uploads/2021/08/a4b54b6e-0865-45f3-9e0d-5ab4ccb6751d1627557703867-00_header-1.jpg",
      "https://scontent.fblr24-1.fna.fbcdn.net/v/t1.6435-9/75266141_10157743915918221_6304204261798445056_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=973b4a&_nc_ohc=LVL30y-bFoMAX9SH-iL&_nc_ht=scontent.fblr24-1.fna&oh=00_AT_ecYEFU1k5sAuCOYU5t1uYJtZmJMVKgMhYaQCc-dlLBw&oe=634FC1BD",
      "https://indiacityblog.com/wp-content/uploads/2021/06/Myntra-400x400.png",
    ]
 
    this.topPics = [
      "https://im.idiva.com/content/2020/Oct/1_5f8eb650e329a.jpg?w=450&h=600&cc=1",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/9340139/2019/4/30/b63d00ee-6aae-46a4-b933-d14aaa5333381556624703545-SCORPIUS-Women-Pack-of-2-Crop-Tops-5261556624701163-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/9340227/2019/4/30/3d0dab06-89e0-498c-9f7c-24fe520baf861556620752425-SCORPIUS-Women-Pack-of-2-Crop-Tops-351556620751029-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20243264/2022/10/1/a6377d5b-5615-4f27-bd4a-6ef3dadbedc51664606651176Oversizedhoodie1.jpg",
      "https://www.manslife.in/wp-content/uploads/2022/02/a4863fb7-e5f3-41cc-aae3-365d6b8f3df91572062812222-3-768x1024.jpg",
      "https://static.magicpin.com/storage/blog/images/myntra-online-shopping-for-mens_Casual_Sweatshirt.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg"
    ]
    this.picsText = [
      "Traditional wear",
      "Western Wear",
      "Jeans",
      "Sweat Shirt",
      "Shirts",
      "Hoodies",
      "Ethnical Wear"
    ]
    this.trendsHer = [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10182385/2019/7/25/1576a8df-1c0f-4f6d-baea-09aa65f334431564038586181-Style-Quotient-Women-White-Printed-Open-Front-Shrug-92115640-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/9341129/2019/5/13/9f3dfc2a-52a9-4511-9858-bfcac09ffc541557734778028-SCORPIUS-Women-Pack-of-2-Tops-7061557734776282-1.jpg",
      "https://m.media-amazon.com/images/I/61ENzpOmxKL._UY550_.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17762130/2022/4/18/6b107e82-7114-490f-9e32-38f54ffd8dd51650282948078JeansBlackberrysMenShirtsBlackberrysMenDressesHILLSTREETWome1.jpg",
      "https://data.dealplatter.com/deals/productimg/2019/ArticleImages/06/Tan-Brown-Solid-Open-Toe-Flats.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16988744/2022/2/23/f4c963e6-dd44-439b-80f2-e10e1b608adb1645558630984KALINIWomenBluePrintedDress1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15550128/2021/9/30/8d11ba65-21c7-4c24-9c8f-1d5f5119b7b31632981991510ZaveriPearlsGold-PlatedRedKundanStuddedMeenakariJewellerySet1.jpg",
      "https://i.pinimg.com/564x/ef/c2/a3/efc2a3d84afc0ef18b804caa54d89829.jpg",
    ]
    this.herText = [
      "Libas",
      "Harpa",
      "U&F",
      "Nayo",
      "SASSAFRAS",
      "RARE",
      "Deewa",
      "Popnetic",
    ]
    this.trendsHim = [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1700944/2022/3/2/093bc645-d461-4128-94a1-0692803944141646215571321-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Cotton-Pure-Cotton--1.jpg",
      "https://m.media-amazon.com/images/I/510r5TC6jpS._UY679_.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11530474/2020/3/2/20f7e2ea-7097-4f60-8af0-89928de666641583151745381-DENNISON-Men-Blue-Comfort-Regular-Fit-Solid-Formal-Shirt-346-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/8241407/2019/4/9/86f9b9af-17d0-43c4-9602-d0c0432f64f71554790686891-Roadster-Men-Black-Printed-Round-Neck-T-shirt-70815547906853-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/11/12/b45a2bef-20c7-4636-8bbd-c3fea5b08faf1605151577475-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18762098/2022/8/31/7bc75300-a341-48c4-b0c2-aeb907cf59241661939802600-Louis-Philippe-Jeans-Men-Sweatshirts-9711661939802098-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14617690/2022/6/30/ee3b4815-2b64-45f9-8045-04b9a99778c01656562021621-Power-Men-Grey-Leather-Road-Running-Non-Marking-Shoes-320165-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1959234/2017/9/1/11504249355643-Roadster-Men-Black-Printed-Hooded-Sweatshirt-9871504249355376-1.jpg",
    ]
    this.himText = [
      "HERE&NOW",
      "Dennis Lingo",
      "WROGN",
      "Roadster",
      "CampusSutra",
      "HIGHLANDER",
      "WILD WEST",
      "REDFEATHER"
    ]
    this.kids = [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16491076/2021/12/13/92092f8f-921e-4d52-8b0c-d9b04bb72ebd1639372865809PinkChickNavyBlueColourblockedLayeredSatinDress1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14945740/2021/7/27/3db0248d-4733-471c-b340-8e4d899157821627364322229VASTRAMAYBoysYellowFloralPrintedAngrakhaKurtiwithDhotiPants1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14279570/2021/8/3/90d30f33-eca0-450c-a0b5-cb061d1c5ee11627962600285-HERENOW-Boys-Blue-Washed-Mid-Rise-Denim-Shorts-7321627962599-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2021/4/28/1c20b5ec-8e64-4bdf-b7e7-004f2063113a1619595788320-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17786148/2022/7/2/8dfed1c9-4473-4685-a854-449375e663421656746629347BitiyabyBhamaGirlsBlueFloralPrintedPleatedKurtawithSkirt7.jpg",
      "https://i.pinimg.com/474x/28/a3/f9/28a3f90f27d33fc346c8872144b89847.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2019/6/16/0eb0f878-838d-4c61-acf5-6ce54a2cb10b1560638321878-1.jpg",
    ]
    this.kidsText = [
      "White World",
      "DREAM",
      "Bitiya by Bhama",
      "JBN Creation",
      "SAKA DESIGNS",
      "pspeaches",
      "VASTRAMAY"
    ]
  }

}
