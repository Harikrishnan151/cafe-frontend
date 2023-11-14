import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  CurrentUser:any=''
  loginSuccess:boolean=false
  loginError:string=''//to hold error message
  constructor(private fb:FormBuilder,private api:ApiService,private loginRouter:Router){}

  loginForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  login(){
    if(this.loginForm.valid){
     
      let username=this.loginForm.value.username
      let password=this.loginForm.value.password
      console.log(username,password);
      
      //Api call for login
      this.api.login(username,password).subscribe({
        next:(response:any)=>{
        console.log(response);
        
        console.log(this.CurrentUser);
        
        // alert("Login Success")
        this.loginSuccess=true
        localStorage.setItem('currentUser',response.currentUser)
        
        
        
        Swal.fire("Logged in","You have successfully logged in","success").then((result)=>{
          
          setTimeout(() => {
            this.loginRouter.navigateByUrl('/dashboard')
        }, 1000);
        })
        // setTimeout(() => {
        
        
        // }, 3000);
       
        
      },error:(error:any)=> {
        Swal.fire("Error","Invalid Username or Password","error")
        setTimeout(() => {
              this.loginForm.reset()
              this.loginError=""
             }, 3000);
        
      },
    }
      // (response:any)=>{
      //     //error message
      //    this.loginError=response.error.message
      //    setTimeout(() => {
      //     this.loginForm.reset()
      //     this.loginError=""
      //    }, 3000);
      // }
      )
      
    // }else{
    //   alert("Invalid Username Or Password")
    // }
  }

}
}