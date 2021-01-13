import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})


export class FetchDataComponent {

  public users: User[] = 
    [
      { id: 1, manager_id: null, name: 'Bob', hour_worked: 40, hourly_wage: 60 },
      { id: 2, manager_id: 6, name: 'Alice', hour_worked: 20, hourly_wage: 15 },
      { id: 3, manager_id: 1, name: 'Jane', hour_worked: 45, hourly_wage: 35 },
      { id: 4, manager_id: 3, name: 'Steve', hour_worked: 15, hourly_wage: 15 },
      { id: 5, manager_id: 3, name: 'Joe', hour_worked: 30, hourly_wage: 20 },
      { id: 6, manager_id: 1, name: 'Jill', hour_worked: 40, hourly_wage: 40 },
    ];
  public subordinates: any[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json;charset=UTF-8')

    http.post(baseUrl + 'weatherforecast', this.users, { headers: headers, responseType: 'text' }).subscribe(result => {
      this.subordinates = JSON.parse(result);
      console.log(this.subordinates);
    }, error => console.error(error));
  }
}

interface User {
  id: number;
  manager_id?: number;
  name: string;
  hour_worked: number;
  hourly_wage: number;
}
