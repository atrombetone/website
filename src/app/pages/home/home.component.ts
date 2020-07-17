import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public innerHeight: number;
  
  constructor() { }

  ngOnInit() {
    this.innerHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
  }
}
