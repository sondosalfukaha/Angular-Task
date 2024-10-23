import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Set a timer for 5 minutes (300000 milliseconds)
    setTimeout(() => {
      this.router.navigate(['/second']);  // Navigate to the second page
    }, 3000);
  }
}
