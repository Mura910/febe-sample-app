import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

 products = [
    { name: "aaa", id: 1 },
    { name: "bbb", id: 2 },
    { name: "ccc", id: 3 },
    { name: "ddd", id: 4 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
