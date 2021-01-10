import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category: Category[] =[
    {id:1, name:'products'},
    {id:2, name:'shop'},
    {id:3, name:'cinema'},
    {id:4, name:'other links'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
