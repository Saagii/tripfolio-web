// Angular Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

// Components
import { ConfirmationComponent } from './components/dialog/child-components/confirmation/confirmation.component';
import { DialogSharedComponent } from './components/dialog/dialog.component';
import { LoaderComponent } from './components/loader/loader.component';

// Directives
import { ButtonLoaderDirective } from './directives/buttonLoader.directive';

@NgModule({
  declarations: [
    // Components
    DialogSharedComponent,
    ConfirmationComponent,
    LoaderComponent,

    // Directives
    ButtonLoaderDirective,
  ],
  imports: [
    // Angular Core Modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material Modules
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSliderModule,
    MatDatepickerModule,
    MatRippleModule
  ],
  exports: [
    // Angular Core Modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Angular Material Modules
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSliderModule,
    MatDatepickerModule,
    MatRippleModule,

    // Components
    DialogSharedComponent,
    ConfirmationComponent,
    LoaderComponent,

    // Directives
    ButtonLoaderDirective,
  ],
  providers: []
})
export class SharedModule { }
