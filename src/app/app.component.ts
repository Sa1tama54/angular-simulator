import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';
import { IUser, users } from './training';
import { Collection } from './collection';

interface IProduct {
  title: string;
  price: number;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'РУМТИБЕТ';
  LAST_VISIT_KEY: string = 'lastVisitDate';
  VISIT_COUNT_KEY: string = 'visitCount';
  lastVisitDate: string | null = localStorage.getItem(this.LAST_VISIT_KEY);
  visitCount: number = Number(localStorage.getItem(this.VISIT_COUNT_KEY)) + 1;

  productCollection: Collection<IProduct> = new Collection<IProduct>([
    { title: 'Беспроводная мышь', price: 1500 },
    { title: 'Механическая клавиатура', price: 4500 },
    { title: 'Игровой монитор', price: 23000 },
  ]);
  userCollection: Collection<IUser> = new Collection<IUser>(users);

  constructor() {
    this.isPrimaryColor(Color.Red);
    this.isPrimaryColor(Color.Black);
    this.saveLastVisitDate();
    this.saveVisitCount();
    this.runCollections();
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

  runCollections(): void {
    this.productCollection.getAllElements();
    this.productCollection.getElement(2);
    this.productCollection.replaceElement(0, { title: 'Проводная мышь', price: 1000 });
    this.productCollection.removeElement(1);
    this.productCollection.clear();

    this.userCollection.getAllElements();
    this.userCollection.getElement(2);
    this.userCollection.replaceElement(3, {
      name: 'Sam',
      surname: 'Winchester',
      age: 35,
      country: 'USA',
      email: 'sam@example.com',
      isLogin: true,
    });
    this.userCollection.removeElement(1);
    this.userCollection.clear();
  }
}
