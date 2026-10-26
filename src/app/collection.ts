import { IUser, users } from './training';

interface IProduct {
  title: string;
  price: number;
}

class Collection<T> {
  private items: T[];

  constructor(items: T[]) {
    this.items = [...items];
  }

  getAllElements(): T[] {
    return [...this.items];
  }

  getElement(index: number): T | undefined {
    return this.items[index];
  }

  clear(): void {
    this.items = [];
  }

  removeElement(index: number): void {
    this.items.splice(index, 1);
  }

  replaceElement(index: number, newElement: T): void {
    this.items[index] = newElement;
  }
}

const products: IProduct[] = [
  { title: 'Беспроводная мышь', price: 1500 },
  { title: 'Механическая клавиатура', price: 4500 },
  { title: 'Игровой монитор', price: 23000 },
];

const productCollection = new Collection<IProduct>(products);

console.log(productCollection.getAllElements());
console.log(productCollection.getElement(2));
productCollection.removeElement(1);
productCollection.replaceElement(0, { title: 'Проводная мышь', price: 1000 });
productCollection.clear();

const userCollection = new Collection<IUser>(users);

console.log(userCollection.getAllElements());
console.log(userCollection.getElement(2));
userCollection.replaceElement(3, {
  name: 'Sam',
  surname: 'Winchester',
  age: 35,
  country: 'USA',
  email: 'sam@example.com',
  isLogin: true,
});
userCollection.removeElement(1);
userCollection.clear();
