import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { ConsoleBodyComponent } from './components/console-body/console-body.component';
import { ConsoleDefaultComponent } from './components/console-default/console-default.component';
import { ConsoleMainHeaderComponent } from './components/console-main-header/console-main-header.component';
import { ConsolePlaygroundComponent } from './components/console-verification-pool/console-playground/console-playground.component';
import { ConsoleVerificationPoolComponent } from './components/console-verification-pool/console-verification-pool.component';


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
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
import { ShareModule } from '../share/share.module';
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ConsoleComponent,
    ConsoleBodyComponent,
    ConsoleDefaultComponent,
    ConsoleMainHeaderComponent,
    ConsolePlaygroundComponent,
    ConsoleVerificationPoolComponent
  ],
    imports: [
        CommonModule,
        ConsoleRoutingModule,
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
        ShareModule,
        MatChipsModule,
        MatCardModule,
        MatDatepickerModule,
        FormsModule

    ]
})
export class ConsoleModule { }
