/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react';
import type { Product } from './types/Product';
import { useAppDispatch } from '../../store';
import { addToCart } from '../cart/toolKit/CartSlice';

type ProductPropsType = {
  product: Product;
};
function ProductCard({ product }: ProductPropsType): JSX.Element {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ productName: product.title, productId: product.id, quantity: 1 }));
  };
  return (
    <div className="flex flex-col items-center gap-3 shadow-2xl rounded-2xl" key={product.id}>
      <img
        className=" my-5 rounded-2xl shadow-2xl"
        style={{ maxWidth: '400px' }}
        src={product.img}
        alt={product.title}
      />
      <h1 className=" mb-8">
        <strong>{product.title}</strong>
      </h1>
      <p className="px-10 mb-8">
        <strong>Описание: </strong> {product.description}
      </p>
      <p className="px-10 mb-8">
        <strong>Цена: </strong> {product.price}
      </p>
      <button
        type="button"
        className="mb-8 outline-solid p-2 rounded-2xl hover:bg-violet-600 hover:text-white"
        onClick={handleAddToCart}
      >
        <strong>Добавить в корзину 🛒💸💰</strong>
      </button>
    </div>
  );
}

export default ProductCard;
