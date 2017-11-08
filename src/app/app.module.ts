import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatAutocompleteModule, MatButtonModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { BasicRowComponent } from './components/basic-row/basic-row.component';
import { RowReverseComponent } from './components/row-reverse/row-reverse.component';
import { BasicColumnComponent } from './components/basic-column/basic-column.component';
import { ColumnReverseComponent } from './components/column-reverse/column-reverse.component';
import {CurComponentService} from './services/cur-component.service';
import { ColumnReverseContentCenteredComponent } from './components/column-reverse-content-centered/column-reverse-content-centered.component';
import { BasicColumnContentCenteredComponent } from './components/basic-column-content-centered/basic-column-content-centered.component';
import { ContainerBasicsComponent } from './components/container-basics/container-basics.component';
import { JustifyingContentComponent } from './components/justifying-content/justifying-content.component';
import { AligningItemsComponent } from './components/aligning-items/aligning-items.component';
import { FlexLayoutGapComponent } from './components/flex-layout-gap/flex-layout-gap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicRowComponent,
    RowReverseComponent,
    BasicColumnComponent,
    ColumnReverseComponent,
    ColumnReverseContentCenteredComponent,
    BasicColumnContentCenteredComponent,
    ContainerBasicsComponent,
    JustifyingContentComponent,
    AligningItemsComponent,
    FlexLayoutGapComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatChipsModule
  ],
  providers: [
    CurComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
