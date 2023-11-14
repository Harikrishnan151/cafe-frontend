import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import jspdf from 'jspdf';
// import 'jspdf-autotable'

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
  
  loginDate:any
  cartProducts:any=[]
  cartTotalPrice = 0;

  name:string='';
  email:string='';
  number:string='';
  paymenttype:string='';
  constructor(private api:ApiService,private deleterouter:Router,private fb:FormBuilder){
    this.loginDate=new Date()
  }
  custmerForm = this.fb.group({
    name:[''],
    email:[''],
    number:[''],
    paymenttype:['']
  })
  submitForm(){
    if(this.custmerForm.valid){
      this.name=this.custmerForm.value.name || ''
      this.email=this.custmerForm.value.email || ''
      this.number=this.custmerForm.value.number || ''
      this.paymenttype=this.custmerForm.value.paymenttype || ''
    }else{
      alert('please enter valid details')
    }
  }
  ngOnInit(): void {
    
    this.api.getCart().subscribe((result:any)=>{
      console.log(result.data);
      this.cartProducts=result.data
      this.getCartTotal()
      this.generateRandomNumber()
    })
   
    }
    refresh(){
      this.api.getCart().subscribe((result:any)=>{
        console.log(result.data);
        this.cartProducts=result.data
        this.getCartTotal()
      this.generateRandomNumber()
      })
    }
    
    //get grand total
    getCartTotal(){
      let total =0;
      this.cartProducts.forEach((item:any)=>{
        total += item.grandTotal
        this.cartTotalPrice= Math.ceil(total)
      })
    }

    //delete cart prodcts
    deleteCartproduct(id:any){
      this.api.deleteCartProduct(id).subscribe((result:any)=>{
        console.log(result);
        alert(result.message)
        this.refresh()
        this.getCartTotal()
        
      })
    }

    increment(id:any){
      this.api.incrementProduct(id).subscribe((result:any)=>{
        this.cartProducts=result
        this.refresh()
        this.getCartTotal()
      })
    }

    decrement(id:any){
      this.api.decrementProduct(id).subscribe((result:any)=>{
        this.cartProducts=result
        this.refresh()
        this.getCartTotal()
      })
    }
   
    delete(){
      this.api.deleteAllproducts().subscribe((result:any)=>{
        console.log(result);
        this.refresh()
        // this.deleterouter.navigateByUrl('/manageproduct')
        
      })
    }

    generateRandomNumber(): number {
      // Generate a random number between 0 (inclusive) and 1 (exclusive)
      return Math.random()*100;
    //  return Math.ceil(generateRandomNumber)
    }

    // generate pdf
    // generatepdf(){
    //   //create an object for jspdf
    //   var pdf =new jspdf();

    //   //setup row for table
    //   let thead=['Name','Category','Quantity','Price','GrandTotal']
    //   let tbody= []
    //   let td=[]

    //   //set up properties for table
    //   pdf.setFontSize(16)
    //   pdf.text('Cafe Management System',15,10)

    //   //to display pdf we have to convert array to object in to nested array
    //   for(let item of this.cartProducts){
    //     let temp=[item.Productname,item.category,item.quantity,item.price,item.grandTotal]
    //     tbody.push(temp)
         
    //   }

    //   //convert nested array into table structure using jspdf and jspdf-autotable
    //   (pdf as any).autoTable(thead,tbody)

    //  // to open pdf in another tab
    // pdf.output('dataurlnewwindow')

    //    //7 Download or save Pdf
    //    pdf.save('Bill.pdf')
    // }


    handleExport(){

      const invoiceContentElement=document.getElementById('invoice_container') as HTMLElement;
      html2canvas(invoiceContentElement,{}).then(canvas=>{
        //is convert the canvas into string url
        const imgData=canvas.toDataURL('image/png');
        console.log(imgData);
        //page width
        const pageWidth=210;
        const pageHeight=297;

        const height=canvas.height*pageWidth/canvas.width
        //inilize the pdf
        const pdf=new jsPDF("p","mm","a4")
        //add the image into pdf
        pdf.addImage(imgData,'PNG',0,0,pageWidth,height);

        pdf.save('Bill.pdf')

      })
    }


  }




