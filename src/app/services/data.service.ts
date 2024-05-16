import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dummyData = [
    { cardName: 'New Wins', value: "230", percentage: "25", displaylabel: 'vs previous 30 days' },
    { cardName: 'Trial:Win Rate', value: "9.86%", percentage: "25", displaylabel: 'vs previous 30 days' },
    { cardName: 'New MRR', value: "$25690", percentage: "8.7", displaylabel: 'vs previous 30 days' }
    // Add more dummy data as needed
  ];
  constructor() { }

  fetchData(cardName?: string): Observable<any> {
    // Simulate an API call by returning an observable
    return of(this.dummyData).pipe(
      map(data => {
        if (cardName) {
          const foundItem = data.find(item => item.cardName === cardName);
          return foundItem ? foundItem : null;
        }
        return data;
      })
    );
  }

  fetchPieGraphData(): Observable<any[]> {
    let data = [
      { name: 'Referral', y: 10 },
      { name: 'Direct', y: 30 },
      { name: 'Organic', y: 60 }
    ];
    return of(data);
  }

  fetchBubbleChartData():Observable<any[]>{
    let data =[{
      name: 'United States',
      data: [
          { x: 500, y: 12, z: 13.8, country: 'United States', color: 'rgba(223, 83, 83, .5)' },
          { x: 400, y: 4, z: 13.8, country: 'United States', color: 'rgba(223, 83, 83, .5)' }
      ]
  }, {
      name: 'Australia',
      data: [
          { x: 300, y: 2, z: 14.7, country: 'Australia', color: 'rgba(119, 152, 191, .5)' },
          { x: 200, y: 4, z: 14.7, country: 'Australia', color: 'rgba(119, 152, 191, .5)' },
          { x: 350, y: 6, z: 14.7, country: 'Australia', color: 'rgba(119, 152, 191, .5)' }
      ]
  }, {
      name: 'Canada',
      data: [
          { x: 450, y: 3, z: 15.8, country: 'Canada', color: 'rgba(119, 191, 152, .5)' },
          { x: 600, y: 10, z: 15.8, country: 'Canada', color: 'rgba(119, 191, 152, .5)' }
      ]
  }, {
      name: 'United Kingdom',
      data: [
          { x: 600, y: 0, z: 24.7, country: 'United Kingdom', color: 'rgba(191, 119, 191, .5)' }
      ]
  }]
  return of(data);
  }

  fetchColumnGraphData(): Observable<any[]>{
    let data =[{
      name: '',
      data: [5, 3]
  }, {
      name: '',
      data: [2, 2]
  }, {
      name: '',
      data: [3, 4]
  }];
  return of(data);
  }
}

