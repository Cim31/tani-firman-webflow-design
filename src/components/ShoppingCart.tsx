
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart as ShoppingCartIcon, Plus, Minus, Trash2, X } from 'lucide-react';
import PaymentForm from './PaymentForm';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart = ({ isOpen, onClose }: ShoppingCartProps) => {
  const { items, updateQuantity, removeFromCart, getTotalItems, clearCart } = useCart();
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  if (!isOpen) return null;

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  if (showPaymentForm) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="text-xl font-semibold">Checkout</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setShowPaymentForm(false);
                onClose();
              }}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="p-4">
            <PaymentForm 
              cartItems={items}
              totalAmount={formatPrice(calculateTotal())}
              onSuccess={() => {
                clearCart();
                setShowPaymentForm(false);
                onClose();
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md max-h-[80vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center space-x-2">
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Keranjang ({getTotalItems()})</span>
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          {items.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              Keranjang kosong
            </div>
          ) : (
            <>
              <div className="max-h-96 overflow-y-auto px-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 py-3 border-b">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-green-600 font-semibold">{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold text-lg text-green-600">
                    {formatPrice(calculateTotal())}
                  </span>
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => setShowPaymentForm(true)}
                >
                  Checkout
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ShoppingCart;
