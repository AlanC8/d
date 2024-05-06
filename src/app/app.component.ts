import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,
    ComponentsComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front';
}
