import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useAppDispatch, type RootState } from '../../store';
import { loadAllProducts, loadProducts } from './toolKit/ProductSlice';
import type { Product } from './types/Product';
import ProductCard from './ProductCard';
import Cart from '../cart/Cart';

function ProductsList(): JSX.Element {
  const { id } = useParams();
  const [isCartOpen, setCartOpen] = useState(false);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC');
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.product.ProductsList);
  const allProducts = useSelector((state: RootState) => state.product.AllProducts);

  console.log(allProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    dispatch(loadAllProducts(Number(id)));
  }, []);

  useEffect(() => {
    dispatch(loadProducts({ id: Number(id), page: currentPage, pageSize, sortBy, sortOrder }));
  }, [id, currentPage, dispatch, sortBy, sortOrder]);

  const totalPages = Math.ceil(allProducts.length / pageSize);

  const handleToggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="w-full flex ">
      <div className="w-5/6 flex flex-col ">
        <div className="sorting justify-center flex flex-row gap-10 mx-auto my-5">
          <label>
            Сортировка:
            <select onChange={(e) => setSortBy(e.target.value)}>
              <option value="">Не Выбрана</option>
              <option value="title">По имени</option>
              <option value="price">По цене</option>
            </select>
          </label>
          <label>
            Сортировать по:
            <select onChange={(e) => setSortOrder(e.target.value as 'ASC' | 'DESC')}>
              <option value="ASC">Возрастанию</option>
              <option value="DESC">Убыванию</option>
            </select>
          </label>
        </div>

        <div className="container flex justify-center mx-auto mt-2 my-20 mt-2 gap-10 flex flex-wrap">
          {products.map((product: Product) => (
            <div className="max-w-md" key={product.id}>
              <ProductCard product={product} key={product.id} />
            </div>
          ))}
        </div>
        <div className="container flex mx-auto justify-center mb-5 pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button type="button" key={index + 1} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="justify-self-end w-80 mx-auto my-5">
        <button
          type="button"
          className="mx-5 mb-8 outline-solid p-2 rounded-2xl hover:bg-violet-600 hover:text-white"
          onTouchMove={handleToggleCart}
          onMouseEnter={handleToggleCart}
          onClick={handleToggleCart}
        >
          {!isCartOpen ? <strong>Открыть корзину 🛒</strong> : <strong>Скрыть корзину 🛒</strong>}
        </button>
        {isCartOpen && <Cart />}
      </div>
    </div>
  );
}

export default ProductsList;
