import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppDispatch, type RootState } from '../../store';
import { loadAllCategories } from './toolKit/CategorySlice';
import type { Category } from './types/Category';

function CategoriesList(): JSX.Element {
  const categories = useSelector((state: RootState) => state.category.CategoriesList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAllCategories());
  }, []);

  return (
    <div className="container ">
      <div className="max-w-screen-sm mx-auto mt-2 my-20 mt-2 flex flex-row">
        {categories.length > 0
          ? categories.map((category: Category) => (
              <div
                className="mx-5 mb-8 outline-solid p-2 rounded-2xl hover:bg-violet-600 hover:text-white"
                key={category.id}
              >
                <Link to={`category/${category.id}`}>
                  <h3>{category.title}</h3>
                </Link>
              </div>
            ))
          : 'Загружаются категории'}
      </div>
    </div>
  );
}

export default CategoriesList;
