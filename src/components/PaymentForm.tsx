
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

interface PaymentFormProps {
  // For single product checkout
  productName?: string;
  productPrice?: string;
  quantity?: number;
  // For cart checkout
  cartItems?: CartItem[];
  totalAmount?: string;
  onSuccess?: () => void;
}

const PaymentForm = ({ 
  productName, 
  productPrice, 
  quantity = 1, 
  cartItems, 
  totalAmount,
  onSuccess 
}: PaymentFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    deliveryDate: '',
    preferredTime: '',
    paymentMethod: 'credit_card'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment form submitted:', formData);
    
    toast({
      title: "Pesanan berhasil!",
      description: "Pesanan Anda telah diterima dan akan segera diproses.",
    });
    
    // Call onSuccess callback if provided (for cart checkout)
    if (onSuccess) {
      onSuccess();
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  // Calculate total for single product or use provided total for cart
  const getOrderTotal = () => {
    if (cartItems && totalAmount) {
      return totalAmount;
    }
    if (productPrice) {
      return productPrice;
    }
    return 'Rp 0';
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-green-600">Form Pembayaran</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Ringkasan Pesanan</h3>
            {cartItems ? (
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <span>{item.name} x{item.quantity}</span>
                    <span className="text-green-600">{item.price}</span>
                  </div>
                ))}
                <div className="border-t pt-2 flex justify-between items-center font-bold">
                  <span>Total:</span>
                  <span className="text-green-600">{totalAmount}</span>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <span>{productName} x{quantity}</span>
                <span className="font-bold text-green-600">{productPrice}</span>
              </div>
            )}
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Informasi Pribadi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Nama Lengkap *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="contoh@email.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Nomor Telepon *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="082151076210"
                />
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Alamat Pengiriman</h3>
            <div>
              <Label htmlFor="address">Alamat Lengkap *</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="Jalan, No. Rumah, RT/RW"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">Kota *</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  placeholder="Nama kota"
                />
              </div>
              <div>
                <Label htmlFor="postalCode">Kode Pos *</Label>
                <Input
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  placeholder="12345"
                />
              </div>
            </div>
          </div>

          {/* Delivery Schedule */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Jadwal Pengiriman</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="deliveryDate">Tanggal Pengiriman *</Label>
                <div className="relative">
                  <Input
                    id="deliveryDate"
                    name="deliveryDate"
                    type="date"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                  <CalendarDays className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div>
                <Label htmlFor="preferredTime">Waktu Preferensi</Label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md"
                >
                  <option value="">Pilih waktu</option>
                  <option value="08:00-12:00">08:00 - 12:00</option>
                  <option value="12:00-16:00">12:00 - 16:00</option>
                  <option value="16:00-20:00">16:00 - 20:00</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Metode Pembayaran</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="credit_card"
                  name="paymentMethod"
                  value="credit_card"
                  checked={formData.paymentMethod === 'credit_card'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-green-600"
                />
                <Label htmlFor="credit_card">Kartu Kredit/Debit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="bank_transfer"
                  name="paymentMethod"
                  value="bank_transfer"
                  checked={formData.paymentMethod === 'bank_transfer'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-green-600"
                />
                <Label htmlFor="bank_transfer">Transfer Bank</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-green-600"
                />
                <Label htmlFor="cod">Bayar di Tempat (COD)</Label>
              </div>
            </div>
          </div>

          {formData.paymentMethod === 'credit_card' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Detail Kartu</h3>
              <div>
                <Label htmlFor="cardNumber">Nomor Kartu *</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required={formData.paymentMethod === 'credit_card'}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="expiryMonth">Bulan *</Label>
                  <select
                    id="expiryMonth"
                    name="expiryMonth"
                    value={formData.expiryMonth}
                    onChange={handleInputChange}
                    required={formData.paymentMethod === 'credit_card'}
                    className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md"
                  >
                    <option value="">Bulan</option>
                    {months.map(month => (
                      <option key={month} value={month.toString().padStart(2, '0')}>
                        {month.toString().padStart(2, '0')}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="expiryYear">Tahun *</Label>
                  <select
                    id="expiryYear"
                    name="expiryYear"
                    value={formData.expiryYear}
                    onChange={handleInputChange}
                    required={formData.paymentMethod === 'credit_card'}
                    className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md"
                  >
                    <option value="">Tahun</option>
                    {years.map(year => (
                      <option key={year} value={year.toString()}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="cvv">CVV *</Label>
                  <Input
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required={formData.paymentMethod === 'credit_card'}
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
              </div>
            </div>
          )}

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
            Proses Pembayaran
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;
