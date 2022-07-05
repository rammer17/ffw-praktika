import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../_services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private scService: ShoppingCartService) { }

  ngOnInit(): void {
    this.fetchCartItems();
  }
  fetchCartItems() {
    this.cartItems = this.scService.getCartItems();
  }
  checkout() {
    console.log("Order was made!")
  }
  removeItem() {
    console.log("Item removed from cart!")
  }

}
