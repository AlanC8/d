import { Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesDetailComponent } from './components/recipes-detail/recipes-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  { path: 'recipe-detail/:label', component: RecipesDetailComponent },
  {
    path: 'recipes',
    component: RecipesComponent,
  },
];
