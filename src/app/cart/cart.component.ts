import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address:'',
  })

  constructor(
    private readonly cartService: CartService,
    private readonly formBuilder: FormBuilder,
  ) {}
  
onSubmit(): void {
  this.items = this.cartService.clearCart();
  console.warn('Your order has been submitted', this.checkoutForm.value);
  this.checkoutForm.reset();
}
}
