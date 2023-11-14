import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser:any;
  constructor(private router:Router,private api:ApiService,private fb:FormBuilder){}


  resetForm=this.fb.group({
    password:['',Validators.required],
    password1:['',Validators.required]
  })
  ngOnInit(): void {
    this.currentUser=localStorage.getItem('currentUser')
    if(!this.currentUser){
     alert('Please login')
     this.router.navigateByUrl('/')
    }
  }

  logOut(){
    localStorage.clear()
  
    this.router.navigateByUrl('/')
  }

  deleteUser(){
    this.api.deleteAccount(this.currentUser).subscribe((data:any)=>{
      console.log(data);
      alert(data.message)
      localStorage.clear()
      this.router.navigateByUrl('/')
      
    })
  }

  //change password
  changePassword(){
    if(this.resetForm.valid){
      let password=this.resetForm.value.password
      let password1=this.resetForm.value.password1
      console.log(password,password1);

      if(password==password1){
        this.api.changePassword(this.currentUser,password).subscribe((Response)=>{
          alert('Password changed')
          this.router.navigateByUrl('/dashboard')
        })
      }else{
        alert('incorrect password')
      }
      
    }
  }



}
