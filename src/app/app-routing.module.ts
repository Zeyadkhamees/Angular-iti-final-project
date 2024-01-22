import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ParentProductComponent } from './Components/parent-product/parent-product.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { ObservablesAndOperatorsComponent } from './Components/observables-and-operators/observables-and-operators.component';
import { UserTemplateFormComponent } from './Components/user/user-template-form/user-template-form.component';
import { UserReactiveFormComponent } from './Components/user/user-reactive-form/user-reactive-form.component';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';
import { userAuthGuard } from './guards/user-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/productsParent', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, title: 'Home page' },
  // {path:'Products',component:ProductsComponent,title:"Products page"},
  {
    path: 'productsParent',
    component: ParentProductComponent,
    title: 'Products page',
    canActivate: [userAuthGuard],
  },
  {
    path: 'productsDetails/:prdId',
    component: ProductsDetailsComponent,
    title: 'Product Details',
  },

  { path: 'about', component: AboutusComponent, title: 'About Us' },
  { path: 'contact', component: ContactUsComponent, title: 'Contact Us' },
  {
    path: 'obs',
    component: ObservablesAndOperatorsComponent,
    title: 'observables',
  },
  {
    path: 'userTemplate',
    component: UserTemplateFormComponent,
    title: 'User Template Form',
  },
  {
    path: 'userReactive',
    component: UserReactiveFormComponent,
    title: 'User Reactive Form',
  },

  // day7

  { path: 'login', component: UserAuthComponent, title: 'User Login' },
  { path: 'logout', component: UserAuthComponent, title: 'User Logout' },


  {
    path: 'userOrder',
    loadChildren: () => import('src/app/Components/user-orders/user-orders.module')
    .then(m => m.UserOrdersModule)
  },





  { path: '**', component: NotFoundComponent, title: '404 not found' },
];

// const routes: Routes = [

//   {path:'main',component:GroupOfRoutesComponent,children:[
//       {path:'',redirectTo:'/productsParent',pathMatch:"full"},
//   {path:'Home',component:HomeComponent,title:"Home page"},
//   {path:'productsParent',component:ParentProductComponent,title:"Products page"},
//   {path:'about',component:AboutusComponent,title:"About Us"},
//   {path:'contact',component:ContactUsComponent,title:"Contact Us"},

//   ],
// },

//     {path:'**',component:NotFoundComponent,title:"404 not found"},

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
