import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

function Cart(): JSX.Element {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="container mx-5 flex flex-col gap-5">
      <ul>
        {cartItems.length > 0
          ? cartItems.map((item) => (
              <li key={item.productId}>
                <ol>
                  <strong>Наименование товара: </strong>
                  {item.productName}
                </ol>
                <ol>
                  <strong>Количество: </strong>
                  {item.quantity}
                </ol>
              </li>
            ))
          : 'Пока корзина пуста'}
      </ul>
    </div>
  );
}

export default Cart;
