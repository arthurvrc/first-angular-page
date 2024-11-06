import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-shipping',

  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss'
})
export class ShippingComponent {
  constructor(
    private readonly cartService: CartService
  ) { }
  shippingCosts!: Observable<{type: string, price: number}[]>;
  ngOnInit():void {
    this.shippingCosts = this.cartService.getShippingPrices();
}
}