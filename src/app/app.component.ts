import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-geologia-mineria-sena-2024';

  constructor(private router: Router) { }

  esPaginaInicio(): boolean {
    return this.router.url === '/inicio';
  }
}
