import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  today: Date = new Date();
  thisMonthStart: Date = moment().startOf('month').toDate();
  thisMonthEnd: Date = moment().endOf('month').toDate();
  thisYearStart: Date = moment().startOf('year').toDate();
  thisYearEnd: Date = moment().endOf('year').toDate();
  startDate:any;
  endDate:any;
  cards:any=[]
  constructor(){

  }

  ngOnInit(){
    this.cards = [
      {
        cardName:"New Wins",
        cardType:"data",
        class:"col-3 p-2"
      },
      {
        cardName:"Trial:Win Rate",
        cardType:"data",
        class:"col-3 p-2"
      },
      {
        cardName:"New MRR",
        cardType:"data",
        class:"col-3 p-2"
      },
      {
        cardName:"Page Views",
        cardType:"pieGraph",
        class:"col-3 p-2"
      },
      {
        cardName:"MRR Stats By Country",
        cardType:"bubbleGraph",
        class:"col-6 p-2"
      },
      {
        cardName:"MRR",
        cardType:"columnGroupGraph",
        class:"col-6 p-2"
      }
    ]
  }

  setThisMonth(): void {
    this.startDate = this.thisMonthStart;
    this.endDate = this.thisMonthEnd;
  }
  
  setThisYear(): void {
    this.startDate = this.thisYearStart;
    this.endDate = this.thisYearEnd;
  }
  
}
