import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from 'primeng/card';
import { CustomdataComponent } from './customdata/customdata.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    DashboardComponent,
    CustomdataComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    DashboardRoutingModule,
    CardModule
  ]
})
export class DashboardModule { }
