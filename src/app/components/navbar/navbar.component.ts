import { Component, OnInit } from '@angular/core';

interface MenuItem {
  id: number;
  link: string;
  label: string;
}
@Component({
  selector: 'ui-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  linkActive: string;
  menus: Array<MenuItem>;
  constructor() { 
    this.menus = [];
    this.menus.push(
      {
        id: 1,
        link: 'home',
        label: 'Home'
      }
    );
    this.menus.push(
      {
        id: 2,
        link: 'contact',
        label: 'Contato'
      }
    );
    this.menus.push(
      {
        id: 3,
        link: 'about',
        label: 'Sobre'
      }
    );
  }

  ngOnInit() {
  }

}
