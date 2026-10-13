import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {
  constructor( private router: Router) {}

  aiAAhorro(): void {
    this.router.navigate(['/ahorro']);
  }
  aiACreditos(): void {
    this.router.navigate(['/creditos']);
  }
  aiASeguros(): void {
    this.router.navigate(['/seguros']);
  }
  aiAServicios(): void {
    this.router.navigate(['/servicios']);
  }
  aiATargetas(): void {
    this.router.navigate(['/targetas']);
  }
  aiAInicio(): void {
    this.router.navigate(['/'])
  }
}
