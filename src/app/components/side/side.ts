import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../recipe.model';

@Component({
  standalone: true,
  selector: 'app-side',
  imports: [CommonModule],
  templateUrl: './side.html',
  styleUrl: './side.css'
})
export class Side {
  @Input() recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<string>();

  selectRecipe(id: string) {
    this.recipeSelected.emit(id);
    
  }
}
