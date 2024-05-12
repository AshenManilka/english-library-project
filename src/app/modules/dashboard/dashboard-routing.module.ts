import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { VerificationPoolComponent } from './components/verification-pool/verification-pool.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { DashboardDefaultComponent } from './components/dashboard-default/dashboard-default.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,children:[
      {path:'',redirectTo:'/dashboard/verification',pathMatch:'full'},
      {path:'verification',component:VerificationPoolComponent},
      {
        // path:'playground',component:PlaygroundComponent,children:[
        //   {path:'',redirectTo:'/dashboard/playground/home',pathMatch:'full'},
        //   {path:'home',component:DashboardDefaultComponent},
        //   { path: 'general-activities', loadChildren: () => import('./modules/dashboard-general-activities/dashboard-general-activities.module').then(m => m.DashboardGeneralActivitiesModule) }
        // ]
          path:'playground',component:PlaygroundComponent,children:[
          {path:'',redirectTo:'/dashboard/playground/general-activities/activities/books/free-books',pathMatch:'full'},
          {path:'home',component:DashboardDefaultComponent},
          { path: 'general-activities', loadChildren: () => import('./modules/dashboard-general-activities/dashboard-general-activities.module').then(m => m.DashboardGeneralActivitiesModule) }
        ]
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
