import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';

const LAST_VISIT_KEY = 'lastVisitDate';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'РУМТИБЕТ';
  lastVisitDate: string | null = localStorage.getItem(LAST_VISIT_KEY);

  constructor() {
    console.log(this.isPrimaryColor(Color.Red));
    console.log(this.isPrimaryColor(Color.Black));
    console.log('Прошлый заход:', this.lastVisitDate);
    this.saveLastVisitDate();
  }

  isPrimaryColor(color: Color): boolean {
    const primaryColors: Color[] = [Color.Red, Color.Green, Color.Blue];
    return primaryColors.includes(color);
  }

  saveLastVisitDate(): void {
    const currentDate: string = new Date().toLocaleString('ru-RU');
    localStorage.setItem(LAST_VISIT_KEY, currentDate);
  }
}
