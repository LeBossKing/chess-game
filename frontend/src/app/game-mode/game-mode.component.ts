// src/app/game-mode/game-mode.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-mode',
  templateUrl: './game-mode.component.html',
  styleUrls: ['./game-mode.component.css']
})
export class GameModeComponent {
  constructor(private router: Router) {}

  playWithFriend(): void {
    // Redirect to friend game page (create this component and route later)
    this.router.navigate(['/against-friend']);
  }

  playWithAI(): void {
    // Redirect to AI game page (create this component and route later)
    this.router.navigate(['/against-computer']);
  }
}