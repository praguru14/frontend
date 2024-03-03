import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CricketData } from '../cricket-data.model';
import { SourceTextModule } from 'vm';
import { log } from 'console';

@Component({
  selector: 'app-cricbuzz',
  templateUrl: './cricbuzz.component.html',
  styleUrls: ['./cricbuzz.component.css']
})
export class CricbuzzComponent {

  constructor(private http:HttpClient){}
  url: string = ''; 
  baseUrl: string ='http://localhost:9012/live'

  submitURL() {
  
    console.log("Submitted URL:", this.url);
    this.url=''

    this.http.post<any>(this.baseUrl,this.url).subscribe(res=>{
      console.log(res)
    })
   
  }
}
