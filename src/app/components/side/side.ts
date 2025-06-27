import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-side',
  imports: [CommonModule],
  templateUrl: './side.html',
  styleUrl: './side.css'
})
export class Side {
  @Input() recipes: any[] = [];
  @Output() recipeSelected = new EventEmitter<string>();

  selectRecipe(id: string) {
    this.recipeSelected.emit(id);
  }
}
