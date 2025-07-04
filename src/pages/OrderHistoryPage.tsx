
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderHistory from '../components/OrderHistory';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const OrderHistoryPage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Riwayat Pesanan</h1>
          <p className="text-gray-600">Lihat semua pesanan yang pernah Anda buat</p>
        </div>

        {!isLoggedIn ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <LogIn className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Login Diperlukan</h2>
            <p className="text-gray-600 mb-6">Silakan login terlebih dahulu untuk melihat riwayat pesanan Anda</p>
            <div className="flex justify-center space-x-4">
              <Link to="/login">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Masuk
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline">
                  Daftar
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <OrderHistory />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderHistoryPage;
