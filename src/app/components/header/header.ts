import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  imgUrl = 'https://forkify-your-recipe.netlify.app/img/logo.svg';
  searchTerm: string = '';

  @Output() search = new EventEmitter<string>();

  onSearch() {
    if (this.searchTerm.trim()) {
      this.search.emit(this.searchTerm);
    }
  }
}
