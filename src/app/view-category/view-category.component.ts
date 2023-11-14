import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {


  allProducts:any=[]// to hold all produvts details
  constructor(private api:ApiService){}
  ngOnInit(): void {
   this.api.viewAllProducts().subscribe((result:any)=>{
     console.log(result.data);
     this.allProducts=result.data
   })
  }

}
