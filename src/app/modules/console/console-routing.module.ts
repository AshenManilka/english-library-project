import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console.component';
import { ConsoleVerificationPoolComponent } from './components/console-verification-pool/console-verification-pool.component';
import { ConsolePlaygroundComponent } from './components/console-verification-pool/console-playground/console-playground.component';
import { ConsoleDefaultComponent } from './components/console-default/console-default.component';

const routes: Routes = [
  {
    path: '', component: ConsoleComponent,children:[
      {path:'',redirectTo:'/console/verification',pathMatch:'full'},
      {path:'verification',component:ConsoleVerificationPoolComponent},
      {
        path:'playground',component:ConsolePlaygroundComponent,children:[
          {path:'',redirectTo:'/console/playground/home',pathMatch:'full'},
          {path:'home',component:ConsoleDefaultComponent},
          {
            path: 'general-activities', loadChildren: () => import('./modules/general-activities/general-activities.module').then(m => m.GeneralActivitiesModule)
          }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }
