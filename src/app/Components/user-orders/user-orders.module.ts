import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCartComponent } from './user-cart/user-cart.component';
import { TrackOrdersComponent } from './track-orders/track-orders.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'userCart',component:UserCartComponent, title:'User Cart'},
  {path:'trackOrders',component:TrackOrdersComponent, title:'Track Orders'}

]

@NgModule({
  declarations: [
    UserCartComponent,
    TrackOrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserOrdersModule { }
