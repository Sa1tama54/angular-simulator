import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';
import { IFeatureItem } from '../interfaces/IFeatureItem';
import { FormsModule } from '@angular/forms';
import { ILocation } from '../interfaces/ILocation';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'РУМТИБЕТ';
  LAST_VISIT_KEY: string = 'lastVisitDate';
  VISIT_COUNT_KEY: string = 'visitCount';
  lastVisitDate: string | null = localStorage.getItem(this.LAST_VISIT_KEY);
  visitCount: number = Number(localStorage.getItem(this.VISIT_COUNT_KEY)) + 1;
  selectedLocation: string = '';
  selectedMemberOption: string = '';
  dateValue: string = '';

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
    this.isPrimaryColor(Color.Red);
    this.isPrimaryColor(Color.Black);
    this.saveLastVisitDate();
    this.saveVisitCount();
  }

  isPrimaryColor(color: Color): boolean {
    const primaryColors: Color[] = [Color.Red, Color.Green, Color.Blue];
    return primaryColors.includes(color);
  }

  saveLastVisitDate(): void {
    const currentDate: string = new Date().toLocaleString('ru-RU');
    localStorage.setItem(this.LAST_VISIT_KEY, currentDate);
  }

  saveVisitCount(): void {
    localStorage.setItem(this.VISIT_COUNT_KEY, String(this.visitCount));
  }
}
