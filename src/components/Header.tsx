
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ShoppingCart, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '../contexts/AuthContext';
import CartButton from './CartButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FT</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Firman Tani</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">
              Beranda
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-green-600 transition-colors">
              Produk
            </Link>
            {user && (
              <Link to="/orders" className="text-gray-600 hover:text-green-600 transition-colors flex items-center space-x-1">
                <History className="h-4 w-4" />
                <span>Pesanan</span>
              </Link>
            )}
            <Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors">
              Tentang
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
              Kontak
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <CartButton />
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Halo, {user.name}</span>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="outline">Masuk</Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Daftar
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <CartButton />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                to="/products" 
                className="text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Produk
              </Link>
              {user && (
                <Link 
                  to="/orders" 
                  className="text-gray-600 hover:text-green-600 transition-colors flex items-center space-x-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <History className="h-4 w-4" />
                  <span>Pesanan</span>
                </Link>
              )}
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
              
              {user ? (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-700 mb-2">Halo, {user.name}</p>
                  <Button variant="outline" onClick={handleLogout} className="w-full">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Masuk</Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Daftar
                    </Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
