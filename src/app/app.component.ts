import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {}
  name = 'Angular';
  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        this.data = { ...res };
        console.log(res);
        console.log(this.data);
      });
  }
  onClick() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        this.data = { ...res };
      });
  }
}
