import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardBodyComponent } from './components/dashboard-body/dashboard-body.component';
import { DashboardMainHeaderComponent } from './components/dashboard-main-header/dashboard-main-header.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { VerificationPoolComponent } from './components/verification-pool/verification-pool.component';
import { DashboardDefaultComponent } from './components/dashboard-default/dashboard-default.component';

import {MatBadgeModule} from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {ShareModule} from "../share/share.module";
import { LoadingService } from '../share/services/loading.service';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardBodyComponent,
    DashboardMainHeaderComponent,
    PlaygroundComponent,
    VerificationPoolComponent,
    DashboardDefaultComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatButtonModule,
     MatDividerModule,
     MatIconModule,
     MatTableModule,
     MatDialogModule,
     MatSlideToggleModule,
     MatPaginatorModule,
     MatTooltipModule,
     MatExpansionModule,
     MatMenuModule,
     ShareModule

  ],
  providers :[
    LoadingService,

  ]
})
export class DashboardModule { }
