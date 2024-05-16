import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as Highcharts from 'highcharts';
declare let require: any;
const noData = require('highcharts/modules/no-data-to-display');
noData(Highcharts);

import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);
@Component({
  selector: 'app-customdata',
  templateUrl: './customdata.component.html',
  styleUrls: ['./customdata.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CustomdataComponent implements OnInit, OnChanges {
  @Input() cardType :any="";
  @Input() cardName:any ="";
  dataToDisplay:any;
  highcharts = Highcharts;
  updateFlag = true;
  options:any;
  constructorType:string="";
  chartPieConstructorType = 'chart';
  height:any;
  callbackFunction: Highcharts.ChartCallbackFunction = function(chart){}
  chartPieCallbackFunction: Highcharts.ChartCallbackFunction = function(chart){}
  chartColumnGroupCallbackFunction: Highcharts.ChartCallbackFunction = function(chart){}
  chartBubbleCallbackFunction: Highcharts.ChartCallbackFunction = function(chart){}
  chartPieOptions:any={
    chart: {
      type: 'pie'
    },
    title: {
      text: ''
    },
    plotOptions: {
      pie: {
        innerSize: '60%', // Make it a donut chart
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>'
        }
      }
    },
    series: [{
      name: 'Data',
      data: [
       
      ]
    }]
  }

  chartBubbleChartOptions:any={
    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },
    title: {
        text: ''
    },
    xAxis: {
        gridLineWidth: 1
    },
    yAxis: {
        startOnTick: false,
        endOnTick: false
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        },
    },
    legend: {
      enabled: true
  },
  series: []

}

chartColumnGroupChartOptions:any= {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Jan-Feb', 'Mar-Apr']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        stackLabels: {
            enabled: false,
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: []

}

  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    if(this.cardType == 'data'){
      this.getData(this.cardName);
    }

    if(this.cardType == 'pieGraph'){
      this.getPieData(this.cardName);
      this.options = this.chartPieOptions;
      this.constructorType = this.chartPieConstructorType;
      this.callbackFunction = this.chartPieCallbackFunction;
      this.height = "135px"
    }

    if(this.cardType == 'bubbleGraph'){
      this.getBubbleChartData();
      this.options = this.chartBubbleChartOptions;
      this.constructorType ='chart';
      this.callbackFunction = this.chartBubbleCallbackFunction;
      this.height = "350px";
    }

    if(this.cardType == 'columnGroupGraph'){
      this.getColumnGroupData();
      this.options = this.chartColumnGroupChartOptions;
      this.constructorType ='chart';
      this.callbackFunction = this.chartColumnGroupCallbackFunction;
      this.height = "350px";
    }
  }

  getData(cardName:string){
    this.dataService.fetchData(cardName).subscribe(data => {
      this.dataToDisplay = data;
      console.log('Data loaded:', this.dataToDisplay);
    });
  }

  getPieData(cardName:string){
    this.dataService.fetchPieGraphData().subscribe(response=>{
      if(response){
        const self = this;
        self.chartPieOptions.series[0].data = response;
        self.updateFlag = true;
      }
    })
  }

  getBubbleChartData(){
    this.dataService.fetchBubbleChartData().subscribe(response=>{
      if(response){
        const self = this;
        self.chartBubbleChartOptions.series= response;
        self.updateFlag = true;
      }
    })
  }

  getColumnGroupData(){
    this.dataService.fetchColumnGraphData().subscribe(response=>{
      if(response){
        const self = this;
        self.chartColumnGroupChartOptions.series= response;
        self.updateFlag = true;
      }
    })
  }
}