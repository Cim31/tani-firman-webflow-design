
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, ShoppingCart, Phone, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Produk', path: '/products' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Kontak', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-800">Firman Tani</h1>
              <p className="text-xs text-gray-600">Toko Pertanian Terpercaya</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm">0812-3456-7890</span>
            </div>
            <Link 
              to="/login" 
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
            >
              <User className="h-4 w-4" />
              <span className="text-sm">Masuk</span>
            </Link>
            <button className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-2 font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/login" 
              className="flex items-center space-x-2 py-2 text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-4 w-4" />
              <span>Masuk</span>
            </Link>
            <div className="flex items-center space-x-2 text-gray-600 mt-4 pt-4 border-t">
              <Phone className="h-4 w-4" />
              <span className="text-sm">0812-3456-7890</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
