import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allproducts:any[],searchTerm:string,propName:string): any[] {
    const result:any=[]
    if(!allproducts||searchTerm==''||propName==''){
      return allproducts
    }
    allproducts.forEach((products:any)=>{
      if(products[propName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
       result.push(products)
      }
    })
    return result;
  }

}
