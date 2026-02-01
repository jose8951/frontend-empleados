import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true, // Aseguramos que sea standalone
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavbarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { // <--- CAMBIADO: De 'App' a 'AppComponent'
  title = 'formulariophp';
}