import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  

  allProducts:any=[]// to hold all produvts details
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.viewAllProducts().subscribe((result:any)=>{
      console.log(result.data);
     this.allProducts=result.data
    })
  }

}
