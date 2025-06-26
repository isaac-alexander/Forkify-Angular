import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-shopping-list',
  imports: [CommonModule],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})
export class ShoppingList {
  items: string[] = [];

  @Input() set newIngredients(ings: string[]) {
    if (ings && ings.length) {
      this.items.push(...ings);
    }
  }

  remove(index: number) {
    this.items.splice(index, 1);
  }
}
