import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CricketData } from '../cricket-data.model';

@Component({
  selector: 'app-cricbuzz',
  templateUrl: './cricbuzz.component.html',
  styleUrls: ['./cricbuzz.component.css']
})
export class CricbuzzComponent {

  constructor(private http: HttpClient) { }

  url: string = '';
  baseUrl: string = 'http://localhost:9012/cricket/live';
  responseData!: CricketData;
  errorMessage: string = '';
  isLoading: boolean = false;

  submitURL() {
    this.errorMessage = '';
    this.isLoading = true;

    const urlWithParams = `${this.baseUrl}?id=${this.url}`;

    this.http.get<any>(urlWithParams).subscribe(
      (res) => {
        console.log("Response:", res);
        this.responseData = res;
      },
      (error) => {
        console.error(error);
        this.errorMessage = 'Error occurred while fetching data.';
      }
    ).add(() => {
      this.isLoading = false;
    });
  }

  clearInput() {
    this.url = '';
  }
}
