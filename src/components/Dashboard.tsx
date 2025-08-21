
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User, ShoppingBag, Heart, Settings, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OrderHistory from './OrderHistory';

const Dashboard = () => {
  const { isLoggedIn, profile, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!isLoggedIn) {
    return null; // Don't show dashboard if not logged in
  }

  return (
    <div className="bg-white rounded-lg shadow-md mb-8">
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="bg-green-600 p-2 rounded-full">
            <User className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Selamat datang, {profile?.full_name || profile?.email}</h3>
            <p className="text-sm text-gray-600">Dashboard Pelanggan</p>
          </div>
        </div>
        <Button 
          onClick={signOut} 
          variant="outline" 
          size="sm"
          className="text-red-600 border-red-600 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Keluar
        </Button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors flex items-center ${
            activeTab === 'overview' 
              ? 'border-green-600 text-green-600' 
              : 'border-transparent text-gray-600 hover:text-green-600'
          }`}
        >
          <User className="h-4 w-4 mr-2" />
          Ringkasan
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors flex items-center ${
            activeTab === 'orders' 
              ? 'border-green-600 text-green-600' 
              : 'border-transparent text-gray-600 hover:text-green-600'
          }`}
        >
          <History className="h-4 w-4 mr-2" />
          Riwayat Pesanan
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Pesanan Saya</p>
                  <p className="text-xl font-semibold text-green-600">2</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Wishlist</p>
                  <p className="text-xl font-semibold text-blue-600">0</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Settings className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Pengaturan</p>
                  <p className="text-sm text-purple-600">Kelola Akun</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && <OrderHistory />}
      </div>
    </div>
  );
};

export default Dashboard;
