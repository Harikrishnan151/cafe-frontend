import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const options={
  headers:new HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //register api function
  register(username:any,email:any,password:any){
     
    const body={
      username,
      email,
      password
    }
    return this.http.post('http://localhost:5000/register',body)
  }

  //login api function
  login(username:any,password:any){
    const body={
      username,
      password
    }
    return this.http.post('http://localhost:5000/login',body)
  }

    //append token in header
    appendToken(){
    
      //get token from local storage
      let token= localStorage.getItem('token')
      //create header
      let headers= new HttpHeaders()

      if(token){
        headers=headers.append('verify-token',token)
        options.headers=headers
      }
      return options
  }

  //addproducts api call
  addProducts(id:any,Productname:any,category:any,discription:any,price:any,quantity:any){
    const body={
      id,
      Productname,
      category,
      discription,
      price,
      quantity
     
    }
    return this.http.post('http://localhost:5000/addProducts',body)
  }

  //view all products api call
  viewAllProducts(){
    return this.http.get('http://localhost:5000/viewAllProducts')
  }

  ///delete product
  deleteProduct(id:any){
    return this.http.delete(`http://localhost:5000/deleteProduct/${id}`)
  }

  //view particular product for order
  viewProductonebyone(){
    return this.http.get('http://localhost:5000/viewProductsonebyone')
  }


  //view particular product
  viewparticularProduct(id:any){
    return this.http.get(`http://localhost:5000/viewparticularproduct/${id}`)
  }

   //edit product details api call
   editProduct(id:any,Productname:any,category:any,discription:any,price:any){
    const body={
      Productname,
      discription,
      category,
      price
    }
    return this.http.post(`http://localhost:5000/editproductDetails/${id}`,body)
  }

  //add to cart
  addtoCart(product:any){
    const body={
      id:product.id,
      Productname:product.Productname,
      category:product.category,
      price:product.price,
      quantity:product.quantity
      
    }
    return this.http.post('http://localhost:5000/addtoCart',body)
  }

  //get cart api call
  getCart(){
    return this.http.get('http://localhost:5000/getCart')
  }

  //delete cart product api call
  deleteCartProduct(id:any){
    return this.http.delete(`http://localhost:5000/deleteCartproduct/${id}`)
  }

  //Increment product api call
  incrementProduct(id:any){
    return this.http.get(`http://localhost:5000/incrementProduct/${id}`)
  }

  //decrement product Api call
  decrementProduct(id:any){
    return this.http.get(`http://localhost:5000/decrementProduct/${id}`)
  }


  //delete allProducts
  deleteAllproducts(){
    return this.http.delete('http://localhost:5000/deleteAllproduct')
  }

  //delete user account
  deleteAccount(username:any){
     return this.http.delete(`http://localhost:5000/deleteAccount/${username}`)
  }

  //change password
  changePassword(currentUser:any,password:any){
    const body={
      password
    }
    return this.http.post(`http://localhost:5000/changePassword/${currentUser}`,body)
  }
}
