import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';

import { MatCardModule } from '@angular/material/card';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';

import { MatListModule } from '@angular/material/list';

import { MatStepperModule } from '@angular/material/stepper';

import { MatRadioModule } from '@angular/material/radio';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';

import { MatSelectModule } from '@angular/material/select';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatDialogModule } from '@angular/material/dialog';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatTableModule } from '@angular/material/table';

import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSortModule } from '@angular/material/sort';

import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
 

@NgModule({

  exports: [
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatExpansionModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatStepperModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,

    // Add other Material modules you need

  ],

})
export class MaterialModule { }
