import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/i-product';
// import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-parent-product',
  templateUrl: './parent-product.component.html',
  styleUrls: ['./parent-product.component.scss']
})
export class ParentProductComponent {
  listFilter:string="";
  ProductCart: IProduct[] = [];
  router: any;

  addToCart(products: any) {
    this.ProductCart = products;
  }
  // day4
// prdId:number=0;

// product:IProduct|undefined=undefined;
//   constructor(private prdService:ProductsService, private activatedRoute:ActivatedRoute){}
//   ngOnInit(): void {
//    this.prdId= (this.activatedRoute.snapshot.paramMap.get('prdId'))?Number(this.activatedRoute.snapshot.paramMap.get
//     ('prdId')):0;

//    this.product= this.prdService.getPrdById(this.prdId)
//   }

// prdDetails(prdId:number){
//   this.router.navigate(['/productsDetails',prdId])
//   }

}
