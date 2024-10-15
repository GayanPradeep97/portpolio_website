import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-skills-and-experince',
  templateUrl: './skills-and-experince.component.html',
  styleUrls: ['./skills-and-experince.component.sass'],
})
export class SkillsAndExperinceComponent {
  ngOnInit(): void {
    const typed = new Typed('.skills', {
      strings: ['...............'],
      typeSpeed: 100,
      backDelay: 100,
      loop: true,
    });
  }
}
