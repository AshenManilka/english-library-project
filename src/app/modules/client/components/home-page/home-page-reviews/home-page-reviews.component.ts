import { Component } from '@angular/core';
import { ScrollService } from 'src/app/modules/share/services/scroll.service';
import {OwlOptions} from "ngx-owl-carousel-o";


@Component({
  selector: 'app-home-page-reviews',
  templateUrl: './home-page-reviews.component.html',
  styleUrls: ['./home-page-reviews.component.scss']
})
export class HomePageReviewsComponent {
  constructor(private scrollService: ScrollService,

    ) { }


  testimonials: any[] = [

    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F10.jpeg?alt=media&token=a7cba3f4-ecfd-41b0-b170-cade2bdbbe6f',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F11.jpeg?alt=media&token=f98baa47-8273-4e29-b37a-afdf92511bec',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F12.jpeg?alt=media&token=1620bfeb-a521-4e8f-b080-56a1cd66ee86',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F13.jpeg?alt=media&token=41f5ee99-68f3-4b45-ad20-668b7d1bc60a',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F14.jpeg?alt=media&token=8ff222e2-978b-468f-b93f-d6a7d5236471',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F15.jpeg?alt=media&token=6389b8ba-7397-4285-bb9c-abee58e4dba5',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F16.jpeg?alt=media&token=8406498c-6c03-4872-82a4-ed525b6eb9f5',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F17.jpeg?alt=media&token=03f2bd99-7100-422d-9156-2685228b69ea',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F18.jpeg?alt=media&token=756c45fc-ba06-49ff-b713-64b08ed53436',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F3.jpeg?alt=media&token=93c24818-4324-4a9c-bd2a-8c61ad77eb5b',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F4.jpeg?alt=media&token=d9cbfe46-3410-4c6c-aea4-eb6d7d9a1f65',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F5.jpeg?alt=media&token=d0ab1fb9-6fb7-4f20-9b5a-ea684beec38c',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F6.jpeg?alt=media&token=1aec98f0-aea3-4cae-bc05-7bd43f781652',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F7.jpeg?alt=media&token=afd756a6-807d-4ad4-a0e1-c78ac28709df',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F8.jpeg?alt=media&token=82f3000c-01d3-4120-a637-cd2244ab8555',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2FreviewResources%2F9.jpeg?alt=media&token=01090945-d370-4964-bd30-e3374d241ec1',
    },






  ];

  testimonialOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 25,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      590:{
        items:1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  };
}
