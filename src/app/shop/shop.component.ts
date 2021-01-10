import { Component, OnInit } from '@angular/core';
import { Items } from '../items';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  title='Market'
  message='Sipariş Ver!'

 shop: Items[] = [
    {id:1,name:'mouse', price:50 , description:'rgb mouse', imageUrl:'https://images.pexels.com/photos/5745513/pexels-photo-5745513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {id:2,name:'CPU', price:150 , description:'newest CPU', imageUrl:'https://images.pexels.com/photos/5745512/pexels-photo-5745512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {id:3,name:'monitor', price:250 , description:'rgb monitor', imageUrl:'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {id:4,name:'keyboard', price:100 , description:'good keyboard', imageUrl:'https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940b'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
