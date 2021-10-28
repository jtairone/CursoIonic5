import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  reorder(e){
    console.log('Dragged from index', e.detail.from, 'to', e.detail.to);
    e.detail.complete();
  }
}
