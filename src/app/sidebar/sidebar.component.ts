import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }
  onActivate() {
    window.scroll(0,0);
    document.body.scrollTop = 0;
    //document.querySelector('body').scrollTo(0,0)
    
}
}
