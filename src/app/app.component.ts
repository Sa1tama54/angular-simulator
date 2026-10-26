import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';

const LAST_VISIT_KEY: string = 'lastVisitDate';
const VISIT_COUNT_KEY: string = 'visitCount';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'РУМТИБЕТ';
  lastVisitDate: string | null = localStorage.getItem(LAST_VISIT_KEY);
  visitCount: number = Number(localStorage.getItem(VISIT_COUNT_KEY)) + 1;

  constructor() {
    console.log(this.isPrimaryColor(Color.Red));
    console.log(this.isPrimaryColor(Color.Black));
    console.log('Прошлый заход:', this.lastVisitDate);
    this.saveLastVisitDate();
    this.saveVisitCount();
  }

  isPrimaryColor(color: Color): boolean {
    const primaryColors: Color[] = [Color.Red, Color.Green, Color.Blue];
    return primaryColors.includes(color);
  }

  saveLastVisitDate(): void {
    const currentDate: string = new Date().toLocaleString('ru-RU');
    localStorage.setItem(LAST_VISIT_KEY, currentDate);
  }

  saveVisitCount(): void {
    localStorage.setItem(VISIT_COUNT_KEY, String(this.visitCount));
  }
}
