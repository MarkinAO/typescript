import Buyable from './Buyable'
import Gadget from './Gadget'

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    if(this._items.indexOf(item) !== -1) {
      if(!(item instanceof Gadget)) {
        return
      }
    } 
    this._items.push(item)
  }

  get items(): Buyable[] {
    return [...this._items]
  }

  calculatAllPrice(): number {
    return this._items.reduce((acc, item) => acc += item.price, 0)
  }

  calculatAllDiscountedPrice(discount: number): number {
    return this.calculatAllPrice() * discount
  }

  deleteItem(id: number): void {
    this._items = this._items.filter(item => item.id !== id)
  }

  subtract(id: number): void {
    this._items.splice(this._items.findIndex(e => e.id === id), 1)
  }
}