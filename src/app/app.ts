import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Header } from './components/header/header';
import { Side } from './components/side/side';
import { Main } from './components/main/main';
import { ShoppingList } from './components/shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    Header,
    Side,
    Main,
    ShoppingList
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
onSelectRecipe($event: Event) {
throw new Error('Method not implemented.');
}
  recipes: any[] = [];
  selectedRecipeId: string = '';
  ingredients: string[] = [];

  constructor(private http: HttpClient) {}

  onSearch(query: string) {
    this.http
      .get<any>(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
      .subscribe({
        next: res => {
          this.recipes = res.recipes;
        },
        error: err => {
          console.error('Search error:', err);
        },
      });
  }

  onRecipeSelect(id: string) {
    this.selectedRecipeId = id;
  }

  onAddToShoppingList(ings: string[]) {
    this.ingredients = ings;
  }
}
