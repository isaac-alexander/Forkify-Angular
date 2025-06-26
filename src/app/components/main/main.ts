import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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
  recipe: any = null;

  constructor(private http: HttpClient) {}

  async ngOnChanges() {
    if (!this.recipeId) return;

    const res: any = await this.http
      .get(`https://forkify-api.herokuapp.com/api/get?rId=${this.recipeId}`)
      .toPromise();

    this.recipe = res.recipe;
  }

  addToShoppingList() {
    if (this.recipe && this.recipe.ingredients)
      this.sendIngredients.emit(this.recipe.ingredients);
  }
}
