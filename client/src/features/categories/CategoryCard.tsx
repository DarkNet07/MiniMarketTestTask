/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react';
import { Link } from 'react-router-dom';
import type { Category } from './types/Category';

type CategoryPropsType = {
  category: Category;
};
function CategoryCard({ category }: CategoryPropsType): JSX.Element {
  return (
    <div
      className="container flex items-center flex-row gap-3 shadow-2xl rounded-2xl"
      key={category.id}
    >
      <Link to={`category/${category.id}`}>
        <button type="button">{category.title}</button>
      </Link>
    </div>
  );
}

export default CategoryCard;
