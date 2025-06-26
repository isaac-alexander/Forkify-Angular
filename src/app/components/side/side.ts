import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-side',
  imports: [CommonModule],
  templateUrl: './side.html',
  styleUrl: './side.css'
})
export class Side {
results: any;
selectRecipe(arg0: any) {
throw new Error();
}
    @Input() recipes: any[] = [];
recipe: any;

}
