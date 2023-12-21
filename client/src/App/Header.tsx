import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CategoriesList from '../features/categories/CategoriesList';

export default function Header(): JSX.Element {
  const navigate = useNavigate();

  const goToMain = () => navigate('/');

  return (
    <nav className="bg-green-200 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="underline" to="/">
          Добро пожаловать в КучаМаркет
        </Link>
        <button
          onClick={goToMain}
          type="button"
          className="outline-solid p-2 hover:bg-violet-600 hover:text-white"
        >
          На главную
        </button>
        <CategoriesList />
      </div>
    </nav>
  );
}
