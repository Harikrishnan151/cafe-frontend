import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
   
  
  searchkey:any=[];
  id:any=''
  allProducts:any=[]// to hold all produvts details
  constructor(private api:ApiService,private manageProductRouter:Router){}
  ngOnInit(): void {
    this.api.viewAllProducts().subscribe((result:any)=>{
      console.log(result.data);
      this.allProducts=result.data 
      
      
    })
  }
  viewproducts(){
    this.api.viewAllProducts().subscribe((result:any)=>{
      console.log(result.data);
      this.allProducts=result.data 
    })
  }
//search
  search(event:any){
    
    console.log(event.target.value);
    this.searchkey=event.target.value;
    
  }
  //delete product
  delectProduct(id:any){
    this.id=localStorage.getItem('id')
    this.api.deleteProduct(id).subscribe((result:any)=>{
      console.log(result);
      alert(result.message)
     this.viewproducts()
    },
    (result)=>{
      alert(result.error)
    }
    )
  }
  //add to cart
  addToCart(product:any){
      //add quantity to product object
      Object.assign(product,{quantity:1})
      console.log(product);
      //api call to add quantity to cart
      this.api.addtoCart(product).subscribe((result)=>{
        alert("Product added ")
      },
      (result:any)=>{
        alert("product not added")
      }
      )

  }
}
