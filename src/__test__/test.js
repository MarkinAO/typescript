// import Buyable from './Buyable'
import Movie from '../ts/Movie.ts';
import Gadget from '../ts/Gadget.ts';
import Book from '../ts/Book.ts';
import Cart from '../ts/Cart.ts';

const redHeat = new Movie(1, 'Red heat', 'USA', ['Action', 'Crime'], 390, 1988);
const warAndPeace = new Book(2, 'Война и мир', 'Л.Н. Толстой', 1690, 1300);
const airPods = new Gadget(3, 'Airpods', 'Apple', ['White'], 18990);
const cart = new Cart();

test('Тест метода add в классе Cart', () => {
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

  cart.add(redHeat);
  cart.add(warAndPeace);
  cart.add(airPods);

  expect(cart.items).toEqual(standard);
});
