import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
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
