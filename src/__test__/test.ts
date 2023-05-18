// import Buyable from './Buyable'
import Movie from '../ts/Movie';
import Gadget from '../ts/Gadget';
import Book from '../ts/Book';
import Cart from '../ts/Cart';

const redHeat = new Movie(1, 'Red heat', 'USA', ['Action', 'Crime'], 390, 1988);
const warAndPeace = new Book(2, 'Война и мир', 'Л.Н. Толстой', 1690, 1300);
const airPods = new Gadget(3, 'Airpods', 'Apple', ['White'], 18990);
const cart = new Cart();

const standard = [
  {
    id: 1,
    name: 'Red heat',
    country: 'USA',
    genre: ['Action', 'Crime'],
    price: 390,
    times: 1988,
  },
  {
    id: 2,
    name: 'Война и мир',
    author: 'Л.Н. Толстой',
    price: 1690,
    pages: 1300,
  },
  {
    id: 3,
    name: 'Airpods',
    manufacturer: 'Apple',
    parameters: ['White'],
    price: 18990,
  },
];

test('Тест метода add в классе Cart', () => {
  cart.add(redHeat);
  cart.add(warAndPeace);
  cart.add(airPods);

  expect(cart.items).toEqual(standard);
});

test('Тест метода calculatAllPrice в классе Cart', () => {
  expect(cart.calculatAllPrice()).toBe(21070);
});

test('Тест метода calculatAllDiscountedPrice в классе Cart', () => {
  expect(cart.calculatAllDiscountedPrice(0.9)).toBe(18963);
});

test('Тест метода add на повторы в классе Cart', () => {
  standard.push(airPods);
  cart.add(redHeat);
  cart.add(airPods);
  expect(cart.items).toEqual(standard);
});

test('Тест метода subtract в классе Cart', () => {
  standard.pop();
  cart.subtract(3);
  expect(cart.items).toEqual(standard);
});

test('Тест метода deleteItem в классе Cart', () => {
  standard.shift();
  cart.deleteItem(1);
  expect(cart.items).toEqual(standard);
});
