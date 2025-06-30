
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Truck, Headphones, Star, Users } from 'lucide-react';

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Benih Padi Unggul IR64',
      price: 'Rp 85.000',
      originalPrice: 'Rp 95.000',
      image: '/placeholder.svg',
      category: 'Benih',
      rating: 5,
      inStock: true,
    },
    {
      id: 2,
      name: 'Pupuk Organik Kompos Premium',
      price: 'Rp 45.000',
      image: '/placeholder.svg',
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
      name: 'Pestisida Organik Anti Hama',
      price: 'Rp 35.000',
      image: '/placeholder.svg',
      category: 'Pestisida',
      rating: 4,
      inStock: true,
    },
  ];

  const services = [
    {
      icon: Leaf,
      title: 'Produk Organik',
      description: 'Produk ramah lingkungan untuk pertanian berkelanjutan'
    },
    {
      icon: Shield,
      title: 'Kualitas Terjamin',
      description: 'Semua produk telah melewati kontrol kualitas ketat'
    },
    {
      icon: Truck,
      title: 'Pengiriman Cepat',
      description: 'Pengiriman ke seluruh Indonesia dengan aman dan cepat'
    },
    {
      icon: Headphones,
      title: 'Konsultasi Gratis',
      description: 'Tim ahli siap membantu konsultasi pertanian Anda'
    },
  ];

  const testimonials = [
    {
      name: 'Bapak Suharto',
      location: 'Petani Padi, Karawang',
      comment: 'Produk di Firman Tani sangat berkualitas. Hasil panen saya meningkat 30% setelah menggunakan pupuk organik mereka.',
      rating: 5,
    },
    {
      name: 'Ibu Sari',
      location: 'Petani Sayuran, Bandung',
      comment: 'Pelayanan sangat memuaskan dan harga terjangkau. Benih sayuran yang saya beli selalu berkualitas baik.',
      rating: 5,
    },
    {
      name: 'Bapak Ahmad',
      location: 'Petani Jagung, Subang',
      comment: 'Sudah 5 tahun jadi pelanggan. Firman Tani selalu memberikan produk terbaik dengan harga yang kompetitif.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Mitra Terpercaya
                <span className="block text-green-200">Petani Indonesia</span>
              </h1>
              <p className="text-xl mb-8 text-green-100 leading-relaxed">
                Dapatkan kebutuhan pertanian berkualitas tinggi dengan harga terjangkau. 
                Dari benih unggul hingga alat pertanian modern, semua ada di Firman Tani.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 text-center flex items-center justify-center space-x-2"
                >
                  <span>Lihat Produk</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200 text-center"
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Petani Indonesia"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-green-600 bg-opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mengapa Memilih Firman Tani?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kami berkomitmen memberikan yang terbaik untuk mendukung kesuksesan pertanian Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Produk Unggulan
            </h2>
            <p className="text-gray-600 text-lg">
              Pilihan terbaik produk pertanian berkualitas tinggi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/products"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Lihat Semua Produk</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-green-200">Petani Terlayani</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-200">Produk Berkualitas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-200">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-green-200">Kepuasan Pelanggan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Testimoni Petani
            </h2>
            <p className="text-gray-600 text-lg">
              Dengarkan pengalaman petani yang telah merasakan manfaat produk kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Meningkatkan Hasil Panen Anda?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan petani yang telah merasakan manfaat produk berkualitas dari Firman Tani.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>Mulai Berbelanja</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
