import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    cartItems: any[] = [];

    addToCart(dino: any) {
        this.cartItems.push(dino);
    }
    getCartItems() {
        return this.cartItems;
    }
}