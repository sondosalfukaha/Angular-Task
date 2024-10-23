import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [CommonModule, FormsModule, Comp1Component, Comp2Component],
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondComponent {
  selectedComponent: string = 'comp1';  // Default selection
}
