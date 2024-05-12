import { HomePageReviewsComponent } from './components/home-page/home-page-reviews/home-page-reviews.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import {HomePageContextComponent} from "./components/home-page/home-page-context/home-page-context.component";
import {AboutUsPageContextComponent} from "./components/about-us/about-us-page-context/about-us-page-context.component";
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';

const routes: Routes = [
  { path: '', component: ClientComponent , children:[
      {path:'',redirectTo:'/client/home',pathMatch:'full'},
      {path:'home',component:HomePageContextComponent , children:[
        {path:'review',component:HomePageReviewsComponent}
      ]},
      {path:'about-us',component:AboutUsPageContextComponent},
      {path:'privacy-policy',component:PrivacyPolicyComponent},
      {path:'terms-of-use',component:TermsOfUseComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
