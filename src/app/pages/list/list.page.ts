import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  frutas = ['Laranja', 'Limão', 'Manga' ];
  constructor() { }

  ngOnInit() {
  }
  toogleval(){
   console.log(this);
  }
}
