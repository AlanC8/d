import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [HeaderComponent, RecipesComponent, RecipesDetailComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent{
  
}
