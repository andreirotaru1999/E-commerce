import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-md text-sm font-medium ${
      location.pathname === path
        ? 'bg-indigo-600 text-white'
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-indigo-700">Inventory App</h1>
        <div className="space-x-4">
          <Link to="/" className={linkClass('/')}>
            Home
          </Link>
          <Link to="/products" className={linkClass('/products')}>
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;