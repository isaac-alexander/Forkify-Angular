import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Recipe } from '../../recipe.model';

@Component({
  standalone: true,
  selector: 'app-main',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  @Input() recipeId: string = '';
  @Output() sendIngredients = new EventEmitter<string[]>();
  recipe: Recipe | null = null;

  constructor(private http: HttpClient) { }

  ngOnChanges() {
    if (!this.recipeId) return;

    this.http
      .get<{ recipe: Recipe }>(`https://forkify-api.herokuapp.com/api/get?rId=${this.recipeId}`)
      .subscribe(
        {
          next: res => {
            this.recipe = res.recipe;
          },
          error: err => {
            console.error('Search error:', err);
          },
        }
      );

  }

  addToShoppingList() {
    if (this.recipe && this.recipe.ingredients)
      this.sendIngredients.emit(this.recipe.ingredients);
  }
}
