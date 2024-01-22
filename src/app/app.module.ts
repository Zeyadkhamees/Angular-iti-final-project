import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideComponent } from './Components/side/side.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentProductComponent } from './Components/parent-product/parent-product.component';
import { BorderStyleDirective } from './directives/border-style.directive';
import { FormatePipe } from './pipes/formate.pipe';
import { HomeComponent } from './Components/home/home.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { ObservablesAndOperatorsComponent } from './Components/observables-and-operators/observables-and-operators.component';
import {HttpClientModule} from '@angular/common/http';
import { UserTemplateFormComponent } from './Components/user/user-template-form/user-template-form.component';
import { UserReactiveFormComponent } from './Components/user/user-reactive-form/user-reactive-form.component';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideComponent,
    ParentProductComponent,
    BorderStyleDirective,
    FormatePipe,
    HomeComponent,
    AboutusComponent,
    ContactUsComponent,
    NotFoundComponent,
    GroupOfRoutesComponent,
    ProductsDetailsComponent,
    ObservablesAndOperatorsComponent,
    UserTemplateFormComponent,
    UserReactiveFormComponent,
    UserAuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
