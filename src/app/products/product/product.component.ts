import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedProducts:any;

  prevPageId: number =-1;

  nextPageId: number=-1;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      let id = parseInt(params.get('id') || '');
      const productIndex = products.findIndex(item => item.id === id);
      this.selectedProducts = products[productIndex];
      this.prevPageId = products[productIndex-1]?.id || -1;
      this.nextPageId = products[productIndex+1]?.id || -1;
    })
  }




 
}
