
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

const ProductCard = ({ id, name, price, originalPrice, image, category, rating, inStock }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!inStock) return;
    
    addToCart({ id, name, price, image });
    toast({
      title: "Produk ditambahkan!",
      description: `${name} telah ditambahkan ke keranjang`,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2">
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
              {category}
            </span>
          </div>
          {!inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Stok Habis
              </span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-green-600 transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({rating}.0)</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-lg font-bold text-green-600">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">{originalPrice}</span>
            )}
          </div>
        </div>
        
        <button 
          onClick={handleAddToCart}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 ${
            inStock 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!inStock}
        >
          <ShoppingCart className="h-4 w-4" />
          <span>{inStock ? 'Tambah ke Keranjang' : 'Stok Habis'}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
