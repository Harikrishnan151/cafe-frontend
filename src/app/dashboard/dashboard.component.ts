import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loginDate:any
  user:string=''

  constructor(){
this.loginDate=new Date()
  }
  ngOnInit(): void {
    if(localStorage.getItem('currentUser')){
      this.user=localStorage.getItem('currentUser')||''
    }
  }
  
   
}
