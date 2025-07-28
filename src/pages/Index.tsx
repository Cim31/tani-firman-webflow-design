
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Truck, Headphones, Star, Users } from 'lucide-react';
import pupukOrganik from '@/assets/pupuk-organik.jpg';
import benihPadi from '@/assets/benih-padi.jpg';
import pestisida from '@/assets/pestisida.jpg';
import cangkul from '@/assets/cangkul.jpg';
import heroFarming from '@/assets/hero-farming.jpg';

const Index = () => {
  const featuredProducts = [
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
      image: cangkul,
      category: 'Alat Pertanian',
      rating: 5,
      inStock: true,
    },
    {
      id: 4,
      name: 'Pestisida Organik Anti Hama',
      price: 'Rp 35.000',
      image: pestisida,
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
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20 overflow-hidden">
        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-30 animate-ping"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-green-200 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-white rounded-full opacity-30 animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-40 right-40 w-1 h-1 bg-green-200 rounded-full opacity-50 animate-pulse animation-delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                Mitra Terpercaya
                <span className="block text-green-200 animate-fade-in animation-delay-300">Petani Indonesia</span>
              </h1>
              <p className="text-xl mb-8 text-green-100 leading-relaxed animate-fade-in animation-delay-500">
                Dapatkan kebutuhan pertanian berkualitas tinggi dengan harga terjangkau. 
                Dari benih unggul hingga alat pertanian modern, semua ada di Firman Tani.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-700">
                <Link
                  to="/products"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 text-center flex items-center justify-center space-x-2 hover-scale hover:shadow-lg"
                >
                  <span>Lihat Produk</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 text-center hover-scale"
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in animation-delay-1000">
              <img 
                src={heroFarming} 
                alt="Petani Indonesia"
                className="rounded-lg shadow-2xl w-full h-96 object-cover hover-scale transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-green-600 bg-opacity-20 rounded-lg animate-pulse"></div>
              {/* Floating icons around the image */}
              <div className="absolute -top-4 -right-4 bg-green-500 p-3 rounded-full animate-bounce animation-delay-1500">
                <Leaf className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mengapa Memilih Firman Tani?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kami berkomitmen memberikan yang terbaik untuk mendukung kesuksesan pertanian Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                  <service.icon className="h-8 w-8 text-green-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-green-600">{service.title}</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Produk Unggulan
            </h2>
            <p className="text-gray-600 text-lg">
              Pilihan terbaik produk pertanian berkualitas tinggi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in hover-scale transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in animation-delay-1000">
            <Link
              to="/products"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 inline-flex items-center space-x-2 hover-scale hover:shadow-lg group"
            >
              <span>Lihat Semua Produk</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-green-600 text-white py-16 relative overflow-hidden">
        {/* Background animation elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-green-400 rounded-full opacity-10 animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in hover-scale transition-transform duration-300">
              <div className="text-4xl font-bold mb-2 animate-pulse">5000+</div>
              <div className="text-green-200">Petani Terlayani</div>
            </div>
            <div className="animate-fade-in hover-scale transition-transform duration-300 animation-delay-200">
              <div className="text-4xl font-bold mb-2 animate-pulse animation-delay-500">500+</div>
              <div className="text-green-200">Produk Berkualitas</div>
            </div>
            <div className="animate-fade-in hover-scale transition-transform duration-300 animation-delay-400">
              <div className="text-4xl font-bold mb-2 animate-pulse animation-delay-1000">15+</div>
              <div className="text-green-200">Tahun Pengalaman</div>
            </div>
            <div className="animate-fade-in hover-scale transition-transform duration-300 animation-delay-600">
              <div className="text-4xl font-bold mb-2 animate-pulse animation-delay-1500">98%</div>
              <div className="text-green-200">Kepuasan Pelanggan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Testimoni Petani
            </h2>
            <p className="text-gray-600 text-lg">
              Dengarkan pengalaman petani yang telah merasakan manfaat produk kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
                        star <= testimonial.rating ? 'text-yellow-400 fill-current animate-pulse' : 'text-gray-300'
                      }`}
                      style={{ animationDelay: `${star * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic transition-colors duration-300 group-hover:text-gray-700">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-gray-800 transition-colors duration-300 group-hover:text-green-600">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-green-400 rounded-full opacity-20 animate-spin"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-green-400 rounded-full opacity-20 animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-green-400 rounded-full opacity-30 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Siap Meningkatkan Hasil Panen Anda?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-300">
            Bergabunglah dengan ribuan petani yang telah merasakan manfaat produk berkualitas dari Firman Tani.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
            <Link
              to="/products"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 inline-flex items-center justify-center space-x-2 hover-scale hover:shadow-lg group"
            >
              <span>Mulai Berbelanja</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 hover-scale"
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
