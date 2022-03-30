import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Componentes Visuais', url: 'componentes-visuais', icon: 'construct' },
    { title: 'Componentes Nativos', url: 'componentes-nativos', icon: 'construct' },
    { title: 'API Externa', url: 'api', icon: 'construct' },
    { title: 'API Externa AP', url: 'apiaco', icon: 'construct' },
    { title: 'Storage', url: 'storage', icon: 'save' },
   /* { title: 'Navegação', url: 'navegacao', icon: 'paper-plane' },
    { title: 'Botões', url: 'botao', icon: 'construct' },
    { title: 'Alert', url: 'alert', icon: 'construct' },
    { title: 'Action-Sheet', url: 'actionsheet', icon: 'construct' },
    { title: 'Badge', url: 'badge', icon: 'construct' },
    { title: 'Card', url: 'card', icon: 'construct' },
    { title: 'Checkbox', url: 'checkbox', icon: 'construct' },
    { title: 'Chip', url: 'chip', icon: 'construct' },
    { title: 'Content', url: 'content', icon: 'construct' },
    { title: 'DataTime', url: 'datetime', icon: 'construct' },
    { title: 'Fab', url: 'fab', icon: 'construct' },
    { title: 'Grid', url: 'grid', icon: 'construct' },
    { title: 'Infinite Scroll', url: 'infinitescroll', icon: 'construct' },
    { title: 'Input', url: 'input', icon: 'construct' },
    { title: 'List', url: 'list', icon: 'construct' },
    { title: 'Progress Bar', url: 'progressbar', icon: 'construct' },
    { title: 'Refresher', url: 'refresher', icon: 'construct' },
    { title: 'Reorder', url: 'reorder', icon: 'construct' },
    { title: 'Select', url: 'select', icon: 'construct' },
    { title: 'Toggle', url: 'toggle', icon: 'construct' },
    { title: 'Searchbar', url: 'searchbar', icon: 'construct' },
    { title: 'Segment', url: 'segment', icon: 'construct' },
    { title: 'Slides', url: 'slides', icon: 'construct' },
    { title: 'Toast', url: 'toast', icon: 'construct' },
    { title: 'Modal', url: 'modal', icon: 'construct' },
    { title: 'Popover', url: 'popover', icon: 'construct' },
    { title: 'Radio', url: 'radio', icon: 'construct' },
    { title: 'Animacao', url: 'animacao', icon: 'construct' }, */
   /* { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' }, */
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private nav: NavController) {}

  home(){
    this.nav.navigateForward('home');
  }
}
