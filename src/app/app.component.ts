import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public searchText : string;
  public banksData : any;
  bankUrl = 'https://vast-shore-74260.herokuapp.com/banks?city=';
  cities = ['Hyderabad', 'Bangalore','Delhi', 'Pune', 'Chennai'];
  loading = false;
  title = 'bankSearchApp';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.banksData = [];
  	this.loading = true;
  	this.getBanksData(this.cities[0]);
  }

  getBanksData(bank) {
  	this.loading = true;
  	this.banksData = [];
  	this.http.get(this.bankUrl+bank.toUpperCase())
  			.subscribe((data) => {
  				this.loading = false
  				this.banksData = data
  			});
  }

}
