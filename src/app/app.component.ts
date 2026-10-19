import { Component } from '@angular/core';
import './training';
import { Color } from '../enums/Color';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'РУМТИБЕТ';

  constructor() {
    console.log(this.isPrimaryColor(Color.Red));
    console.log(this.isPrimaryColor(Color.Black));
  }

  isPrimaryColor(color: Color): boolean {
    const primaryColors: Color[] = [Color.Red, Color.Green, Color.Blue];
    return primaryColors.includes(color);
  }
}
