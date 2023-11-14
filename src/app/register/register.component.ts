import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterError:string=''//to hold error message
  RegisterSuccess:string=''//to hold success message

  constructor(private fb:FormBuilder,private api:ApiService,private loginRouter:Router){}

  registerForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    email:['',[Validators.required]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]

  })
  register(){
    if(this.registerForm.valid){
     
    console.log(this.registerForm.value);
    let username=this.registerForm.value.username
    let email=this.registerForm.value.email
    let password=this.registerForm.value.password
    console.log(username,email,password);
    //api call for register
    this.api.register(username,email,password).subscribe((response:any)=>{
    console.log(response);
    Swal.fire("Registeration Succesful","You have succesfully Registered","success").then((result)=>{
      // alert(response.message)
    this.RegisterSuccess=response.message
      setTimeout(() => {
        this.loginRouter.navigateByUrl('login')
      }, 3000);
    })
    // alert(response.message)
    // this.RegisterSuccess=response.message
    // setTimeout(() => {
    //   this.loginRouter.navigateByUrl('login')
    // }, 3000);
    
    
     
      
      
    },
    (response:any)=>{
      Swal.fire("Error","Username already exist","error")
      this.RegisterError=response.error.message
      setTimeout(() => {
        this.registerForm.reset();
        this.RegisterError="";
        
      }, 2000);
    }
    )
    // alert("Register clicked")

    }else{
      alert("Invalid Form")
    }
    
    
    
    
  }

}
