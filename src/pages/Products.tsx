
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Search, Filter } from 'lucide-react';
import pupukOrganik from '@/assets/pupuk-organik.jpg';
import benihPadi from '@/assets/benih-padi.jpg';
import pestisida from '@/assets/pestisida.jpg';
import benihJagung from '@/assets/benih-jagung.jpg';
import pupukCair from '@/assets/pupuk-cair.jpg';
import insektisida from '@/assets/insektisida.jpg';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Semua', 'Benih', 'Pupuk', 'Alat Pertanian', 'Pestisida'];

  const products = [
    {
      id: 1,
      name: 'Benih Padi Unggul IR64',
      price: 'Rp 85.000',
      originalPrice: 'Rp 95.000',
      image: benihPadi,
      category: 'Benih',
      rating: 5,
      inStock: true,
    },
    {
      id: 2,
      name: 'Pupuk Organik Kompos Premium',
      price: 'Rp 45.000',
      image: pupukOrganik,
      category: 'Pupuk', 
      rating: 4,
      inStock: true,
    },
    {
      id: 3,
      name: 'Cangkul Besi Berkualitas Tinggi',
      price: 'Rp 125.000',
      originalPrice: 'Rp 140.000',
      image: '/placeholder.svg',
      category: 'Alat Pertanian',
      rating: 5,
      inStock: true,
    },
    {
      id: 4,
      name: 'Benih Jagung Hibrida',
      price: 'Rp 65.000',
      image: benihJagung,
      category: 'Benih',
      rating: 4,
      inStock: false,
    },
    {
      id: 5,
      name: 'Pestisida Organik Anti Hama',
      price: 'Rp 35.000',
      image: pestisida,
      category: 'Pestisida',
      rating: 4,
      inStock: true,
    },
    {
      id: 6,
      name: 'Pupuk NPK 16-16-16',
      price: 'Rp 75.000',
      image: pupukCair,
      category: 'Pupuk',
      rating: 5,
      inStock: true,
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Produk Kami</h1>
          <p className="text-gray-600">Temukan kebutuhan pertanian berkualitas tinggi</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Cari produk..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 h-5 w-5" />
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada produk yang ditemukan.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
