import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {
  searchData: string = "";
  recipes : any[] =[];

  constructor(private api: ApiService){}
  
  ngOnInit(): void {
    this.getMainRecipes()
  }

  getRecipes(){
    this.api.getRecipes(this.searchData).subscribe(
      (data) => {

      if (data && data.hits) {
        this.recipes = data.hits;
      } else {
        this.recipes = [];
        console.error('Data received is not in expected format:', data);
      }
    },
    (error) => {
      console.error('Error fetching recipes:', error);
    }
    )
  }
  
  getMainRecipes(){
    this.api.getMainRecipes().subscribe(
      (data) => {
      if (data && data.hits) {
        this.recipes = data.hits;
      } else {
        this.recipes = [];
        console.error('Data received is not in expected format:', data);
      }
    },
    (error) => {
      console.error('Error fetching recipes:', error);
    }
    )
  }
  onSearchClick() {
    this.getRecipes()
  }
}
