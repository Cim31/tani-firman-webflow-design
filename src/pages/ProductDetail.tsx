import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentForm from '../components/PaymentForm';
import { ArrowLeft, ShoppingCart, Star, Plus, Minus, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import benihPadi from '@/assets/benih-padi.jpg';
import pupukOrganik from '@/assets/pupuk-organik.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  // Mock product data - in real app this would come from API
  const products = [
    {
      id: 1,
      name: 'Benih Padi Unggul IR64',
      price: 'Rp 85.000',
      originalPrice: 'Rp 95.000',
      images: [benihPadi, benihPadi, benihPadi],
      category: 'Benih',
      rating: 5,
      reviews: 124,
      inStock: true,
      description: 'Benih padi unggul IR64 dengan kualitas terbaik untuk hasil panen yang maksimal. Varietas ini tahan terhadap hama dan penyakit, serta memiliki daya tumbuh yang tinggi.',
      specifications: [
        'Varietas: IR64',
        'Kemurnian: 98%',
        'Daya tumbuh: 85%',
        'Kadar air: 12%',
        'Berat: 5 kg'
      ],
      benefits: [
        'Hasil panen tinggi',
        'Tahan hama dan penyakit',
        'Kualitas beras premium',
        'Cocok untuk berbagai kondisi lahan'
      ]
    },
    {
      id: 2,
      name: 'Pupuk Organik Kompos Premium',
      price: 'Rp 45.000',
      images: [pupukOrganik, pupukOrganik],
      category: 'Pupuk',
      rating: 4,
      reviews: 89,
      inStock: true,
      description: 'Pupuk organik kompos premium yang diolah dari bahan-bahan alami pilihan. Mengandung nutrisi lengkap untuk pertumbuhan tanaman yang optimal.',
      specifications: [
        'Jenis: Kompos organik',
        'C-Organik: 15%',
        'N-Total: 1.5%',
        'P2O5: 1%',
        'Berat: 10 kg'
      ],
      benefits: [
        'Memperbaiki struktur tanah',
        'Meningkatkan kesuburan tanah',
        'Ramah lingkungan',
        'Meningkatkan hasil panen'
      ]
    }
  ];

  const product = products.find(p => p.id === parseInt(id || '1')) || products[0];

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleBuyNow = () => {
    setShowPaymentForm(true);
  };

  if (showPaymentForm) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => setShowPaymentForm(false)}
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Detail Produk</span>
          </button>
          <PaymentForm 
            productName={product.name}
            productPrice={product.price}
            quantity={quantity}
          />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Beranda</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-green-600">Produk</Link>
          <span>/</span>
          <span className="text-gray-800">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link 
          to="/products"
          className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Produk</span>
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-green-500' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">
                  {product.rating}.0 ({product.reviews} ulasan)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-green-600">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Deskripsi Produk</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Jumlah</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange('decrease')}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-xl font-semibold px-4">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('increase')}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-6">
                <Button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {product.inStock ? 'Beli Sekarang' : 'Stok Habis'}
                </Button>
                <Button variant="outline" size="icon" className="p-3">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="p-3">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <span className={`text-sm font-medium ${
                  product.inStock ? 'text-green-600' : 'text-red-600'
                }`}>
                  {product.inStock ? '✓ Tersedia' : '✗ Stok Habis'}
                </span>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t border-gray-200">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Specifications */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Spesifikasi</h3>
                  <ul className="space-y-2">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="text-gray-600">• {spec}</li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Keunggulan</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-600">• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
