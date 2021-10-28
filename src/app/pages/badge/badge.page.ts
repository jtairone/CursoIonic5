import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  notificacoes : number = 110;
  constructor() { }

  ngOnInit() {
  }

}
