import { IProduct } from './../models/i-product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {

  constructor(private httpclient:HttpClient) { }



  getAllProducts():Observable<IProduct[]>{

    return this.httpclient.get<IProduct[]>(`${environment.baseAPIURL}/products`)

  }

  getProductsByID(prdId:number):Observable<IProduct>{

    return this.httpclient.get<IProduct>(`${environment.baseAPIURL}/products/${prdId}`)

  }

  searchByMaterial(mat:string):Observable<IProduct[]>{

    return this.httpclient.get<IProduct[]>(`${environment.baseAPIURL}/products?name=${mat}`)

  }


}
