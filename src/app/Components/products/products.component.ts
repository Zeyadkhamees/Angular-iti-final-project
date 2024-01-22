import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/i-product';
import { Store } from 'src/app/models/store';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // assignment 1

storeObj:Store = new Store("Cairo Store",["Dokki","Maadi","Zamalek"],"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHDWaWYCmQNAaNz9gTPR2C8a5A6SGFtmg_w&usqp=CAU");

clientName:string="Zeyad";


iProductObj:IProduct={id:100,name:"Car",quantity:20, price:35000,img:"https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75",
cateogryId:999};


// assignment 2

// productList:IProduct[];
isPurshased:boolean=true;
purchasedBefore: boolean = false;
userName:string="Zozz";

quantity:number=0;

filteredPrd:IProduct[] = [];
ProductCart: IProduct[] = [];

private _listFilter:string="";

@Input() get listFilterChild():string{
  return this._listFilter;
}
set listFilterChild(value:string){
  this._listFilter= value;
  // this.filteredPrd = this.searchFilter(parseInt(value));
  // day 4
    // this.filteredPrd = this.productServices.searchFilter(parseInt(value));

    // Day 5
    this.prdApiService.getAllProducts().subscribe(data =>{

      this.filteredPrd = data.filter(prd=>prd.name.toLocaleLowerCase().includes(value))
    })

}


@Output() CartProducts: EventEmitter<IProduct[]> = new EventEmitter<IProduct[]>();

PurchaseDate:Date=new Date();







// day4

constructor(private productServices:ProductsService, private router:Router, private prdApiService: ProductsWithApiService){


  // this.productList=[
  //   {id:1,name:"The Lord of the Rings: The Fellowship of the Ring",quantity:0, price:200,cateogryId:1,
  // img:"http://1.bp.blogspot.com/-3Qr51FbCt7A/UP-ccYH1e0I/AAAAAAAAA2w/2aM1a9ZcBnk/s1600/the-lord-of-the-rings-fellowship-of-the-rings_1.jpg"},

  // {id:2,name:"The Lord of the Rings: The two twoers",quantity:5, price:250,cateogryId:1,
  // img:"https://i.pinimg.com/originals/a4/44/ed/a444ed492deb6aaaa79c0ab76eccbf67.jpg"},


  // {id:3,name:"The Lord of the Rings: The return of the king",quantity:10, price:350,cateogryId:1,
  // img:"https://image.tmdb.org/t/p/original/uAyBAdGBKqApKUFDoR3n9LMbRiU.jpg"},



  // {id:4,name:"Rango",quantity:1, price:170,cateogryId:2,
  // img:"https://www.themoviedb.org/t/p/original/oTOB2H2LCNFTzMXOL2n8nrwxZca.jpg"},

  // {id:5,name:"Hotel translvania",quantity:20, price:500,cateogryId:2,
  // img:"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534496804/hotel-transylvania-transformania-movie-novelization-9781534496804_hr.jpg"},


  // {id:6,name:"Soul",quantity:7, price:450,cateogryId:2,
  // img:"https://themoviespoiler.com/wp-content/uploads/2020/12/soul_ver7.jpg"},


  // {id:7,name:"Spirited Away",quantity:2, price:200,cateogryId:3,
  // img:"https://i.pinimg.com/originals/c3/56/00/c35600db8bfc9f8682a7d4e5082eb17d.jpg"},

  // {id:8,name:"Howl's Moving Castle",quantity:15, price:250,cateogryId:3,
  // img:"https://i.pinimg.com/originals/d9/58/af/d958af17a108fb02824653a721b0b6a7.jpg"},


  // {id:9,name:"My Neighbor Totoro",quantity:12, price:350,cateogryId:3,
  // img:"https://www.rightstufanime.com/images/blog/my-neighbor-totoro-poster.jpg"}


  // ]

}
  ngOnInit(): void {
    // this.filteredPrd= this.productList;
    // this.filteredPrd= this.productServices.getPrds();

    // day 5

    this.prdApiService.getAllProducts().subscribe({
     next:(data)=>{

      this.filteredPrd=data;
     },
     error:(err)=>{
      console.log(err);
     }
    })




  }

hideLogo(){
this.isPurshased =!this.isPurshased;

}


// searchFilter(filterBy:string):IProduct[]{
//   return this.productList.filter((product:IProduct)=>product.name.toLocaleLowerCase().includes(filterBy));

// }


// searchFilter(filterBy:number):IProduct[]{
//   return this.productList.filter((product:IProduct)=>product.price == filterBy);

// }


// searchFilter(filterBy:number):IProduct[]{
//   return this.productList.filter((product:IProduct)=>product.cateogryId == filterBy);

// }


cartHandling(product: IProduct) {

  product.isPurchased = !product.isPurchased;
  this.CartProducts.emit(
    this.filteredPrd.filter((item) => item.isPurchased && item.quantity)
  );

  this.purchasedBefore = this.filteredPrd.some(
    (item) => item.isPurchased
  );
  }

  decrease(product: IProduct) {
    product.quantity = product.quantity == 0 ? 0 : --product.quantity;
    return product;
  }
  increase(product: IProduct) {
    product.quantity += 1;
    return product;
  }







// assignment Day 3

// day 4


prdDetails(prdId:number){
this.router.navigate(['/productsDetails',prdId])
}





}
