export class Collection<T> {
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
