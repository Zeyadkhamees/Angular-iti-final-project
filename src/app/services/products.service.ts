import { Injectable } from '@angular/core';
import { IProduct } from '../models/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productList:IProduct[]=[];

  constructor() {

    this.productList=[
      {id:1,name:"The Lord of the Rings: The Fellowship of the Ring",quantity:0, price:200,cateogryId:1,
    img:"http://1.bp.blogspot.com/-3Qr51FbCt7A/UP-ccYH1e0I/AAAAAAAAA2w/2aM1a9ZcBnk/s1600/the-lord-of-the-rings-fellowship-of-the-rings_1.jpg"},

    {id:2,name:"The Lord of the Rings: The two twoers",quantity:5, price:250,cateogryId:1,
    img:"https://i.pinimg.com/originals/a4/44/ed/a444ed492deb6aaaa79c0ab76eccbf67.jpg"},


    {id:3,name:"The Lord of the Rings: The return of the king",quantity:10, price:350,cateogryId:1,
    img:"https://image.tmdb.org/t/p/original/uAyBAdGBKqApKUFDoR3n9LMbRiU.jpg"},



    {id:4,name:"Rango",quantity:1, price:170,cateogryId:2,
    img:"https://www.themoviedb.org/t/p/original/oTOB2H2LCNFTzMXOL2n8nrwxZca.jpg"},

    {id:5,name:"Hotel translvania",quantity:20, price:500,cateogryId:2,
    img:"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534496804/hotel-transylvania-transformania-movie-novelization-9781534496804_hr.jpg"},


    {id:6,name:"Soul",quantity:7, price:450,cateogryId:2,
    img:"https://themoviespoiler.com/wp-content/uploads/2020/12/soul_ver7.jpg"},


    {id:7,name:"Spirited Away",quantity:2, price:200,cateogryId:3,
    img:"https://i.pinimg.com/originals/c3/56/00/c35600db8bfc9f8682a7d4e5082eb17d.jpg"},

    {id:8,name:"Howl's Moving Castle",quantity:15, price:250,cateogryId:3,
    img:"https://i.pinimg.com/originals/d9/58/af/d958af17a108fb02824653a721b0b6a7.jpg"},


    {id:9,name:"My Neighbor Totoro",quantity:12, price:350,cateogryId:3,
    img:"https://www.rightstufanime.com/images/blog/my-neighbor-totoro-poster.jpg"}


    ]


   }

   getPrds():IProduct[]{
    return this.productList;
   }

   searchFilter(filterBy:number):IProduct[]{
    return this.productList.filter((product:IProduct)=>product.cateogryId == filterBy);

  }


  getPrdById(prdId:number): IProduct|undefined{

    return this.productList.find(pr=>pr.id==prdId);
  }


  getProductsByIDS():number[]{

    return this.productList.map(prod=>prod.id);
  }
}
