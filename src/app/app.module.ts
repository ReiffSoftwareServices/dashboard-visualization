import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { D3VisualizationComponent } from './d3-visualization/d3-visualization.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardTableComponent,
    D3VisualizationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: DashboardTableComponent},
    ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
