import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  ngOnInit(): void {
    const typed = new Typed('.animationText', {
      strings: ['FrontEnd Developer', 'UI/UX Designer'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
    });
  }
}
