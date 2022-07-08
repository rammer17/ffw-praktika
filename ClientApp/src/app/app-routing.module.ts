import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinoPreviewComponent } from './dino/dino-preview/dino-preview.component';
import { HomeComponent } from './home/home.component';
import { CartDetailsComponent } from './shopping-cart/cart-details/cart-details.component';
import { OrderDetailsComponent } from './shopping-cart/order-details/order-details.component';
import { OrderPreviewComponent } from './shopping-cart/order-preview/order-preview.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent },
  { path: 'dino-preview', component:  DinoPreviewComponent },
  { path: 'cart', component:  ShoppingCartComponent, children: [
    { path: '', component: CartDetailsComponent },
    { path: 'details', component: OrderDetailsComponent },
    { path: 'preview', component: OrderPreviewComponent }
  ] },
  { path: '**', component:  HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
