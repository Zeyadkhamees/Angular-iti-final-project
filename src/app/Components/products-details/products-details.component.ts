import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/i-product';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  prdId: number = 0;

  product: IProduct | undefined = undefined;

  // day 5

  prdsAfterSearch: IProduct[] = [];

  productsIDS: number[] = [];
  currentPrdIndex: number = 0;
  location: any;

  constructor(
    private prdService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private prdAPIServices: ProductsWithApiService
  ) {}
  ngOnInit(): void {

    // this.prdId = this.activatedRoute.snapshot.paramMap.get('prdId')
    //   ? Number(this.activatedRoute.snapshot.paramMap.get('prdId'))
    //   : 0;
    // console.log(this.prdId);

    //  this.product= this.prdService.getPrdById(this.prdId)
    //  console.log(this.product)

    // Day 5

    // this.prdAPIServices.getProductsByID(this.prdId).subscribe(data=>{
    //   this.product=data;
    //   console.log(this.product)
    // })

    // this.prdAPIServices.getProductsByID(this.prdId).subscribe((data) => {
    //   this.product = data;
    //   console.log(this.product);
    // });





     // Day7

     this.productsIDS = this.prdService.getProductsByIDS();
     console.log(this.productsIDS)



    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.prdId=(paramMap.get('prdId'))?Number(paramMap.get('prdId')):0;
      let prd = this.prdService.getPrdById(this.prdId);
      if(prd){
        this.product=prd;
      }
      else{
        alert("products is not found")
        this.location.back();

      }
    })
  }





  back() {
    this.router.navigate(['productsParent']);
  }

  searchProductsByMaterial(search: string) {
    this.prdAPIServices.searchByMaterial(search).subscribe((data) => {
      this.prdsAfterSearch = data;
    });
  }

  prevFunc() {
    this.currentPrdIndex = this.productsIDS.indexOf(this.prdId);
    // console.log(this.currentPrdIndex);
    this.router.navigate([
      '/productsDetails',
      this.productsIDS[--this.currentPrdIndex],
    ]);
  }

  nextFunc() {
    this.currentPrdIndex = this.productsIDS.indexOf(this.prdId);
    // console.log(this.currentPrdIndex);
    this.router.navigate([
      '/productsDetails',
      this.productsIDS[++this.currentPrdIndex],
    ]);
  }
}
