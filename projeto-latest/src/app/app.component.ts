import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponentComponent],
  template: `
  <!-- <router-outlet></router-outlet> -->
  <app-new-component/>
  `,
})
export class AppComponent {
  title = 'projeto-latest';
}