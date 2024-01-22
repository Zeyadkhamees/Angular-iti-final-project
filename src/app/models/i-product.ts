export interface IProduct {
  id:number;
  name:string;
  quantity:number;
  price:number;
  cateogryId:number;
  img:string;
  isPurchased?: boolean;
  creditCard?: string;

}
