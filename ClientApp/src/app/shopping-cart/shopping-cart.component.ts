import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ShoppingCartService } from '../_services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems?: any[] = undefined;
  isCartEmpty: boolean = true;
  bill: number = 0;
  finalBill: number = 0;

  constructor(private scService: ShoppingCartService,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit(): void {
    this.fetchCartItems();
  }
  fetchCartItems() {
    this.cartItems = this.scService.getCartItems();
    if(this.cartItems.length) {
      this.isCartEmpty = false;
    } else {
      this.isCartEmpty = true;
    }
    this.cartItems.forEach(dino => {
      this.bill += dino.price;
      this.finalBill = this.bill + 20;
    });
    
  }
  checkout() {
    this.messageService.add({key: 'cart', severity: 'success', detail: 'Поръчката е направена успешно!'});
    this.isCartEmpty = true;
    this.cartItems?.splice(0);
    this.router.navigateByUrl('/home');
  }
  removeItem(index: number) {
    this.cartItems?.splice(index, 1)
    if(this.cartItems?.length) {
      this.isCartEmpty = false;
    } else {
      this.isCartEmpty = true;
    }
    this.cartItems?.forEach(dino => {
      this.bill += dino.price;
      this.finalBill = this.bill + 20;
    });
  }



  ngOnDestroy() {
    this.isCartEmpty = true;
  }

}
