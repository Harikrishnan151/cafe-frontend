import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-produts',
  templateUrl: './edit-produts.component.html',
  styleUrls: ['./edit-produts.component.css']
})
export class EditProdutsComponent implements OnInit {
  allProduct:any={}
  productId:string=''
  constructor(private api:ApiService,private activateroute:ActivatedRoute){}
  ngOnInit(): void {

    this.activateroute.params.subscribe((data:any)=>{
      console.log(data);
      this.productId=data.id
      console.log(this.productId);
      
    })
    this.api.viewparticularProduct(this.productId).subscribe((result:any)=>{
     this.allProduct=result.data
     console.log(this.allProduct);
     
    })


  }
 editProduct(){
  this.api.editProduct(this.productId,this.allProduct.Productname,this.allProduct.category,this.allProduct.discription,this.allProduct.price).subscribe((response:any)=>{
    console.log(response);
    
    alert(response.message)
  })
 }
}
