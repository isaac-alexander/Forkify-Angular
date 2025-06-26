import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [ CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
 query: string = '';

  @Output() search = new EventEmitter<string>();
searchTerm: any;

  onSearch() {
    this.search.emit(this.query.trim());
  }
}