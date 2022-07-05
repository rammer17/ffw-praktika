import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinoPreviewComponent } from './dino/dino-preview/dino-preview.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent },
  { path: 'dino-preview', component:  DinoPreviewComponent },
  { path: 'cart', component:  ShoppingCartComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
