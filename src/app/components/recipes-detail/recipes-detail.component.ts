import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

interface Nutrient {
  label: string;
  quantity: number;
  unit: string;
}

@Component({
  selector: 'app-recipes-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipes-detail.component.html',
  styleUrl: './recipes-detail.component.scss'
})


export class RecipesDetailComponent {
  recipe: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}


  get nutrients(): {[key: string]: Nutrient} {
    return this.recipe.totalNutrients as {[key: string]: Nutrient};
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let label = params.get('label');
      if(label == null){
        label = ""
      }
      this.apiService.getRecipes(label).subscribe(data => {
        if (data && data.hits) {
          const exactRecipe = data.hits.find((hit: { recipe: { label: string; }; }) => hit.recipe.label.toLowerCase() === label.toLowerCase());
          
          if (exactRecipe) {
            this.recipe = exactRecipe.recipe;
            
          } else {
            console.error('No recipe found with the label:', label);
            this.recipe = null; // or set to some default state
          }
        } else {
          console.error('No hits found in the response:', data);
          this.recipe = null; // or set to some default state
        }
      });
    });
  }
}
