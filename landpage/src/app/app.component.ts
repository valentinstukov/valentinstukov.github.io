import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <h1>Resume</h1>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simple landpage';
}
