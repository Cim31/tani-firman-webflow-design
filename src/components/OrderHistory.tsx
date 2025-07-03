
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Package, Calendar, MapPin, CreditCard, Eye } from 'lucide-react';

interface OrderItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  address: string;
  paymentMethod: string;
  deliveryDate: string;
}

const OrderHistory = () => {
  const { user, isLoggedIn } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (isLoggedIn && user) {
      // Mock order data - in real app, this would fetch from API
      const mockOrders: Order[] = [
        {
          id: 'ORD-001',
          date: '2024-01-15',
          items: [
            { id: 1, name: 'Benih Padi Unggul', price: 'Rp 45.000', quantity: 2, image: '/placeholder.svg' },
            { id: 2, name: 'Pupuk Organik', price: 'Rp 35.000', quantity: 1, image: '/placeholder.svg' }
          ],
          total: 'Rp 125.000',
          status: 'delivered',
          address: 'Jl. Merdeka No. 123, Jakarta',
          paymentMethod: 'Kartu Kredit',
          deliveryDate: '2024-01-18'
        },
        {
          id: 'ORD-002',
          date: '2024-01-20',
          items: [
            { id: 3, name: 'Pestisida Organik', price: 'Rp 55.000', quantity: 1, image: '/placeholder.svg' }
          ],
          total: 'Rp 55.000',
          status: 'shipped',
          address: 'Jl. Merdeka No. 123, Jakarta',
          paymentMethod: 'Transfer Bank',
          deliveryDate: '2024-01-23'
        }
      ];
      setOrders(mockOrders);
    }
  }, [isLoggedIn, user]);

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      case 'processing': return 'text-blue-600 bg-blue-50';
      case 'shipped': return 'text-purple-600 bg-purple-50';
      case 'delivered': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'Menunggu';
      case 'processing': return 'Diproses';
      case 'shipped': return 'Dikirim';
      case 'delivered': return 'Selesai';
      default: return status;
    }
  };

  if (!isLoggedIn) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Silakan login untuk melihat riwayat pesanan</p>
        </CardContent>
      </Card>
    );
  }

  if (selectedOrder) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Package className="h-5 w-5" />
              <span>Detail Pesanan #{selectedOrder.id}</span>
            </CardTitle>
            <Button 
              variant="outline" 
              onClick={() => setSelectedOrder(null)}
            >
              Kembali
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Order Status */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-semibold">Status Pesanan</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedOrder.status)}`}>
                {getStatusText(selectedOrder.status)}
              </span>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-xl font-bold text-green-600">{selectedOrder.total}</p>
            </div>
          </div>

          {/* Order Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Tanggal Pesanan: {selectedOrder.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Alamat: {selectedOrder.address}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Pembayaran: {selectedOrder.paymentMethod}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Package className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Estimasi Tiba: {selectedOrder.deliveryDate}</span>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div>
            <h3 className="font-semibold mb-3">Item Pesanan</h3>
            <div className="space-y-3">
              {selectedOrder.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-600">Jumlah: {item.quantity}</p>
                    <p className="font-semibold text-green-600">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Package className="h-5 w-5" />
          <span>Riwayat Pesanan</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {orders.length === 0 ? (
          <div className="text-center py-8">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Belum ada pesanan</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">#{order.id}</h3>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">
                      {order.items.length} item • {order.total}
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Lihat Detail
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OrderHistory;
