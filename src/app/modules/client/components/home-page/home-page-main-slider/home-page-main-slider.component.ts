import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ScrollService } from 'src/app/modules/share/services/scroll.service';
import { SlideDrawerStateService } from 'src/app/modules/share/services/slide-drawer-state.service';
import { NavbarService } from 'src/app/modules/share/services/navbar.service';

@Component({
  selector: 'app-home-page-main-slider',
  templateUrl: './home-page-main-slider.component.html',
  styleUrls: ['./home-page-main-slider.component.scss']
})
export class HomePageMainSliderComponent implements OnInit {

  constructor(private scrollService:ScrollService,
              private slideDrawerStateService:SlideDrawerStateService,
              private navbarService:NavbarService
    ){

  }

imageLink:string = '';
landingSlidesStore: any[] = [];

  ngOnInit(): void {
    this.countUp(0, 1000,20);
    this.countUp(1, 25,500);

    // console / dashboard, slide drawer state set to false
    this.slideDrawerStateService.toggleSlideDrawer(false);

    this.navbarService.resetNavbarState();

  // Call the method to set the image link based on the window width
  this.collapseNavbarHome();

  }

  // imageLink:string='https://plus.unsplash.com/premium_photo-1661598993003-ae2644019ce2?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  subTitle:string='Englishecholibary Digital Library consists of Grammar, Sentence Patterns & Dialogues books with necessary clarifications in Sinhala.';


  collapseNavbarHome() {
    if (window.innerWidth < 600) {
      // this.imageLink = 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2Fmain-slider-mobile-image.jpg?alt=media&token=888dc361-3fe4-43e5-9e7f-9f77cb3a2208';
        this.imageLink='https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2Fmain-slider-mobile-image-2.jpg?alt=media&token=5115eadc-81d5-4ea9-816a-11a608f69b6b'
    } else {
      this.imageLink = 'https://firebasestorage.googleapis.com/v0/b/anyideainenglish-app.appspot.com/o/appResources%2Fmain-slider-desktop-view-min.jpg?alt=media&token=b44781ac-4bb7-4fe5-945d-8400423110b5';
    }

    this.landingSlidesStore = [
      {
        imageLink: this.imageLink,
        titleText: "Express your thoughts in English easily!",
        subTitleText: this.subTitle,
        buttonText: 'Free Books',
        buttonLink:'freeBook',
        countProject: 0,
        bottomText1: 'More than a ',
        bottomText2:'Thousand successful students'
      },
      {

        imageLink: this.imageLink,
        titleText: "Speak your mind clearly in English!",
        subTitleText:  this.subTitle,
        buttonText: 'Video Lessons',
        buttonLink:'videoLessons',
        countProject: 0,
        bottomText1: 'Years  of ',
        bottomText2:'Experienced'
      },
      {

        imageLink: this.imageLink,
        titleText: "Think it, say it, in English!",
        subTitleText: this.subTitle,
        buttonText: 'Grammar Books',
        buttonLink:'grammar',
        countProject:1000,
        bottomText1: 'More than a ',
        bottomText2:'Thousand successful students'
      },
      {

        imageLink: this.imageLink,
        titleText:  "Express yourself in English, effortlessly!",
        subTitleText:  this.subTitle,
        buttonText: 'Sentence Patterns',
        buttonLink:'sentencePatterns',
        countProject: 25,
        bottomText1: 'Years  of ',
        bottomText2:'Experienced'
      },
      {

        imageLink: this.imageLink,
        titleText: "Easily share your thoughts in English!",
        subTitleText:  this.subTitle,
        buttonText: 'Dialogues',
        buttonLink:'dialogues',
        countProject:1000,
        bottomText1: 'More than a ',
        bottomText2:'Thousand successful students'
      },
    ];

  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    dots: false,
    autoplay:true,
    autoplayTimeout: 2000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };

  countUp(index: number, finishCount: number,timeOut:number): void {
    let currentCount = 0;
    const intervalId = setInterval(() => {
      currentCount++;
      this.landingSlidesStore[index].countProject = currentCount;
      if (currentCount >= finishCount) {
        clearInterval(intervalId);
      }
    }, timeOut);
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);

  }

}
