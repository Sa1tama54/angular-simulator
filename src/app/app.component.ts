import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';
import { IFeatureItem } from '../interfaces/IFeatureItem';
import { FormsModule } from '@angular/forms';
import { ILocation } from '../interfaces/ILocation';

type HeaderMode = 'date' | 'clicker';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'РУМТИБЕТ';
  selectedLocation: string = '';
  selectedMemberOption: string = '';
  dateValue: string = '';
  currentDateTime: string = '';
  counter: number = 0;
  mode: HeaderMode = 'date';
  liveInputValue: string = '';
  isLoading: boolean = true;
  private LAST_VISIT_KEY: string = 'lastVisitDate';
  private VISIT_COUNT_KEY: string = 'visitCount';
  private lastVisitDate: string | null = localStorage.getItem(this.LAST_VISIT_KEY);
  private visitCount: number = Number(localStorage.getItem(this.VISIT_COUNT_KEY)) + 1;

  locations: ILocation[] = [
    {
      id: 1,
      value: 'mountains',
      name: 'Кавказские горы',
    },
    {
      id: 2,
      value: 'altay',
      name: 'Алтай',
    },
  ];

  memberOptions: string[] = ['1 человек', '2 человека', '3 человека', '4 человека'];

  features: IFeatureItem[] = [
    {
      id: 1,
      icon: 'guide-icon',
      title: 'Опытный гид',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 2,
      icon: 'security-icon',
      title: 'Безопасный поход',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 3,
      icon: 'price-icon',
      title: 'Лояльные цены',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
  ];

  constructor() {
    this.simulateLoading();
    this.isPrimaryColor(Color.Red);
    this.isPrimaryColor(Color.Black);
    this.saveLastVisitDate();
    this.saveVisitCount();
    this.startTimer();
  }

  decrement(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  increment(): void {
    this.counter++;
  }

  setMode(mode: HeaderMode): void {
    this.mode = mode;
  }

  private simulateLoading(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  private getCurrentDate(): string {
    return new Date().toLocaleString('ru-RU');
  }

  private startTimer(): void {
    this.currentDateTime = this.getCurrentDate();

    setInterval(() => {
      this.currentDateTime = this.getCurrentDate();
    }, 1000);
  }

  private isPrimaryColor(color: Color): boolean {
    const primaryColors: Color[] = [Color.Red, Color.Green, Color.Blue];
    return primaryColors.includes(color);
  }

  private saveLastVisitDate(): void {
    localStorage.setItem(this.LAST_VISIT_KEY, this.getCurrentDate());
  }

  private saveVisitCount(): void {
    localStorage.setItem(this.VISIT_COUNT_KEY, String(this.visitCount));
  }
}
