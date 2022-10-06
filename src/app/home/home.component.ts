import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dealsArr:any;
  topPics:any;
  trendsHer:any;
  trendsHim:any;
  kids:any;

  constructor() { }

  ngOnInit(): void {
    this.dealsArr = [
      "https://scontent.fblr24-1.fna.fbcdn.net/v/t1.6435-9/123796432_10159307310348221_4351058473770506895_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3-AihPk8R0AAX_Rsx51&_nc_ht=scontent.fblr24-1.fna&oh=00_AT_jygmIgc0LMX2mtcD0Ki5SV6LxnQYNE7S3k-d1RU8hNA&oe=634E0480",
      "https://www.nepaloffers.com/public/offer/6E7D678F7CA3DC5-offer.jpg",
      "https://scontent.fblr24-1.fna.fbcdn.net/v/t1.6435-9/50885302_10157048864348221_7221738129537892352_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=106&ccb=1-7&_nc_sid=8024bb&_nc_ohc=zPmrIEuc8JIAX_HHCVD&_nc_ht=scontent.fblr24-1.fna&oh=00_AT_mJVzRHkS4CDJEB5C5RumtX0PMWl_d7PBZ2es0bsj6kg&oe=634D697C",
      "https://www.savemoneyindia.com/wp-content/uploads/2021/12/myntra-pay-300x262.jpg",
      "https://businesswireindia.com/Handler/ThumbNailImage.ashx?imgpath=https://cms.businesswireindia.com/Uploads/news-multimedia/images/myntraimage_73813.png&width=700",
      "https://qph.cf2.quoracdn.net/main-qimg-2fa256dc9106d589463936b68ccabc9d-lq",
      "https://www.zingoy.com/blog/wp-content/uploads/2021/08/a4b54b6e-0865-45f3-9e0d-5ab4ccb6751d1627557703867-00_header-1.jpg",
      "https://scontent.fblr24-1.fna.fbcdn.net/v/t1.6435-9/75266141_10157743915918221_6304204261798445056_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=973b4a&_nc_ohc=LVL30y-bFoMAX9SH-iL&_nc_ht=scontent.fblr24-1.fna&oh=00_AT_ecYEFU1k5sAuCOYU5t1uYJtZmJMVKgMhYaQCc-dlLBw&oe=634FC1BD",
      "https://indiacityblog.com/wp-content/uploads/2021/06/Myntra-400x400.png",

    ]
    this.topPics = [
      "https://im.idiva.com/content/2020/Oct/1_5f8eb650e329a.jpg?w=450&h=600&cc=1",
      "https://media.fashionnetwork.com/m/f013/b8e7/d1f3/55ab/6031/717a/d4b4/279e/1249/9c95/9c95.jpeg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/9340227/2019/4/30/3d0dab06-89e0-498c-9f7c-24fe520baf861556620752425-SCORPIUS-Women-Pack-of-2-Crop-Tops-351556620751029-1.jpg",
      "https://prernachhabra.style/wp-content/uploads/2021/12/screenshot_20211201-183212_instagram.jpg",
      "https://www.manslife.in/wp-content/uploads/2022/02/a4863fb7-e5f3-41cc-aae3-365d6b8f3df91572062812222-3-768x1024.jpg",
      "https://static.toiimg.com/img/92132548/Master.jpg",
      "https://th-i.thgim.com/public/brandhub/8g3fdd/article37925734.ece/alternates/FREE_435/Image-4jpg"
    ]
    this.trendsHer = [
      "https://img.tatacliq.com/images/i8/437Wx649H/MP000000006568394_437Wx649H_202205181338211.jpeg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/9341129/2019/5/13/9f3dfc2a-52a9-4511-9858-bfcac09ffc541557734778028-SCORPIUS-Women-Pack-of-2-Tops-7061557734776282-1.jpg",
      "https://m.media-amazon.com/images/I/61ENzpOmxKL._UY550_.jpg",
      "https://images.shaadisaga.com/shaadisaga_production/photos/pictures/002/687/511/new_medium/TWM00492.jpg?1623063816",
      "https://data.dealplatter.com/deals/productimg/2019/ArticleImages/06/Tan-Brown-Solid-Open-Toe-Flats.jpg",
      "https://im.idiva.com/content/2021/Feb/OptionsQUESTION1-copy-3-33_6034f6f1b8aee.jpg?w=310&h=310&cc=1",
      "https://4.bp.blogspot.com/-oOIslnn--rw/WqkkVSpT1PI/AAAAAAAACK0/ilVOi7sUULY-f5QyVNEYTr61EQwH_kEJACLcBGAs/s1600/Handcrafted%2Bear%2Bcuff.jpg",
      "https://i.pinimg.com/564x/ef/c2/a3/efc2a3d84afc0ef18b804caa54d89829.jpg",
    ]
    this.trendsHim = [
      "https://img.mensxp.com/media/content/2022/Sep/c2fc604f-c121-4f27-9b3d-c97a9c65d63d_631b4dcbe8482.png",
      "https://m.media-amazon.com/images/I/510r5TC6jpS._UY679_.jpg",
      "https://images.bewakoof.com/utter/content/2642/content_Grey_pant_combination_outfit.jpg",
      "https://static.toiimg.com/photo/msid-92126966/92126966.jpg?imgsize=92126966",
      "https://i.pinimg.com/originals/61/c1/e6/61c1e6ed8c452031385be1da88312259.jpg",
      "https://imgmedia.lbb.in/media/2021/12/61b6d703b1f5aa57be937daf_1639372547869.jpg",
      "https://img.mensxp.com/media/content/2022/Jun/Myntra_2_62a31f4c647ef.jpeg",
      "https://th-i.thgim.com/public/brandhub/3y10os/article37925742.ece/alternates/FREE_435/ImageBoy2jpg",
    ]
    this.kids = [
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16491076/2021/12/13/92092f8f-921e-4d52-8b0c-d9b04bb72ebd1639372865809PinkChickNavyBlueColourblockedLayeredSatinDress1.jpg",
      "https://pbs.twimg.com/media/Dr4HnhDU8AAr7y1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14279570/2021/8/3/90d30f33-eca0-450c-a0b5-cb061d1c5ee11627962600285-HERENOW-Boys-Blue-Washed-Mid-Rise-Denim-Shorts-7321627962599-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2021/4/28/1c20b5ec-8e64-4bdf-b7e7-004f2063113a1619595788320-1.jpg",
      "https://sc02.alicdn.com/kf/He65dc3cbe438455c969d08d520cd2532y/239561493/He65dc3cbe438455c969d08d520cd2532y.jpg",
      "https://i.pinimg.com/474x/28/a3/f9/28a3f90f27d33fc346c8872144b89847.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2019/6/16/0eb0f878-838d-4c61-acf5-6ce54a2cb10b1560638321878-1.jpg",
    ]
  }

}
