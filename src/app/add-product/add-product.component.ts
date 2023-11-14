import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private fb:FormBuilder,private api:ApiService,private manageproductroute:Router){}

  addProductForm = this.fb.group({
    id:['',Validators.required],
    Productname:['',Validators.required],
    category:['',Validators.required],
    discription:['',Validators.required],
    price:['',Validators.required],
    quantity:['',Validators.required]
    
  })
  addProduct(){
    if(this.addProductForm.valid){
      // alert("Add product clicked")
    console.log(this.addProductForm.value);
    let id=this.addProductForm.value.id;
    let Productname = this.addProductForm.value.Productname;
    let category =this.addProductForm.value.category;
    let discription=this.addProductForm.value.discription;
    let price=this.addProductForm.value.price
    let quantity=this.addProductForm.value.quantity
    console.log(id,Productname,category,discription,price,quantity);
    // //api call for add products
    this.api.addProducts(id,Productname,category,discription,price,quantity).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem('id',JSON.stringify(id))
      console.log(id);
      
      alert(response.message)
      this.manageproductroute.navigateByUrl('manageproduct')
    },
    (response:any)=>{
      alert('Product already exist')
      setTimeout(() => {
      this.addProductForm.reset()
        
      },3000);
    }
    )
    }else{
      alert("invalid form")
    }
    
    
  }
}
