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
      profileImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      name:'Tharindu S',
      review:"This website is a game-changer for anyone looking to learn English. The books and videos break down complex English concepts in clear, easy-to-understand Sinhala. I've improved my vocabulary and grammar significantly in just a few weeks. Highly recommended!"
    },
    {
      profileImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      name:'Nirmala D',
      review:"Learning English felt overwhelming until I found this site. The way they explain everything in Sinhala makes it so much easier to grasp. The videos are especially helpful, and I can revisit them anytime I need a refresher. This is a must-have resource for Sinhala speakers."
    },
    {
      profileImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      name:'Amara L',
      review:"I love how this website makes learning English accessible to Sinhala speakers. The books are well-written, and the videos are very informative. It's perfect for anyone who wants to learn at their own pace. My English has improved, and I understand the nuances much better now."
    },
    {
      profileImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      name:' Ruwan E',
      review:"This is the best resource I've found for learning English. The materials are explained in Sinhala, which makes understanding difficult concepts much easier. The interactive videos and detailed books have helped me progress quickly. Thank you for creating such a valuable tool for Sinhala speakers!"
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
