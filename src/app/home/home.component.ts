import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isCollapse:boolean=false
  isCollapse1:boolean=false
  isCollapse2:boolean=false

  collapse(){
    this.isCollapse=!this.isCollapse
  }
  collapse1(){
    this.isCollapse1=!this.isCollapse1
  }
  collapse2(){
    this.isCollapse2=!this.isCollapse2
  }

}
