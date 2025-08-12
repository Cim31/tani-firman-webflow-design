
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
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 text-white py-20 overflow-hidden">
        {/* Modern geometric background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath stroke='%23ffffff' stroke-width='0.5' d='M20 20L0 0h40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Minimal floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-green-300 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full opacity-40 animate-ping"></div>
          <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-50 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full opacity-30 animate-ping animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="mb-6">
                <span className="inline-block border border-green-300/30 text-green-100 px-4 py-2 rounded-full text-sm font-medium animate-fade-in animation-delay-200 backdrop-blur-sm">
                  🌱 Premium Agriculture Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight animate-fade-in animation-delay-400">
                <span className="bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">
                  Firman Tani
                </span>
                <span className="block text-2xl md:text-3xl font-sans font-light text-green-100 animate-fade-in animation-delay-600 mt-2">
                  Modern Farming Excellence
                </span>
              </h1>
              <p className="text-lg mb-10 text-green-50 leading-relaxed animate-fade-in animation-delay-1000 font-light max-w-xl">
                Solusi pertanian modern dengan produk berkualitas tinggi dan teknologi terdepan untuk hasil panen yang optimal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-1200">
                <Link
                  to="/products"
                  className="group bg-white text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-all duration-300 text-center flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <span>Shop Products</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="group border border-green-300/50 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600/20 transition-all duration-300 text-center transform hover:scale-105"
                >
                  <span>Get Expert Help</span>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in animation-delay-1400">
              <div className="relative group">
                <img 
                  src={heroFarming} 
                  alt="Modern Agriculture Solutions"
                  className="rounded-xl shadow-xl w-full h-80 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
              </div>
              
              {/* Simple floating accent */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-emerald-400 rounded-full animate-pulse opacity-80"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-green-400 rounded-full animate-pulse animation-delay-1000 opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative">
        {/* Minimal background accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block border border-green-200 px-6 py-2 rounded-full mb-6">
              <span className="text-green-700 font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Premium Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Trusted by thousands of farmers across Indonesia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-green-50/50 rounded-lg p-6 text-center hover:bg-green-100 hover:shadow-lg transition-all duration-300 animate-fade-in border border-green-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-300 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-green-50/30 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center border border-green-200 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-green-700 font-medium">Featured Products</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Premium Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              High-quality products proven to increase farming productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in animation-delay-1000">
            <Link
              to="/products"
              className="group inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-300 space-x-2 transform hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative py-20 bg-green-700 text-white">
        {/* Minimal background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23ffffff' stroke-width='0.5' fill='none' d='M15 15L0 0h30z'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Trusted Excellence
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to quality
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-white">5000+</div>
              <div className="text-green-100">Farmers Served</div>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-white">500+</div>
              <div className="text-green-100">Quality Products</div>
            </div>
            <div className="animate-fade-in animation-delay-400">
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-white">15+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
            <div className="animate-fade-in animation-delay-600">
              <div className="text-5xl md:text-6xl font-display font-bold mb-2 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent animate-pulse animation-delay-1500">98%</div>
              <div className="text-green-100 font-medium">Kepuasan Pelanggan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} className="w-full h-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-50 to-orange-50 px-6 py-3 rounded-full mb-6 border border-yellow-100">
              <Users className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-orange-700 font-semibold">Kata Mereka Tentang Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6 bg-gradient-to-r from-gray-800 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Testimoni Inspiratif
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Cerita sukses petani Indonesia yang telah merasakan transformasi dengan produk berkualitas dari Firman Tani
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover-scale animate-fade-in border border-gray-100/50 hover:border-yellow-200 relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-6 w-6 transition-all duration-300 group-hover:scale-110 ${
                          star <= testimonial.rating ? 'text-yellow-400 fill-current animate-pulse' : 'text-gray-300'
                        }`}
                        style={{ animationDelay: `${star * 100}ms` }}
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-800 font-medium">
                    "{testimonial.comment}"
                  </blockquote>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="font-display font-semibold text-gray-800 text-lg transition-colors duration-300 group-hover:text-orange-600">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 mt-1">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-800 via-emerald-900 to-teal-900 text-white overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-48 h-48 border-4 border-green-400/20 rounded-full animate-spin"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-emerald-400/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-teal-400/40 rounded-full animate-pulse"></div>
          <div className="absolute top-20 left-1/4 w-16 h-16 bg-green-400/10 rounded-full animate-bounce animation-delay-1000"></div>
          <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-emerald-400/10 rounded-full animate-pulse animation-delay-2000"></div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-900/20 to-emerald-900/40"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/30">
                <span className="text-green-200 font-semibold">🚀 Bergabung Sekarang</span>
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in animation-delay-300 bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">
              Revolusi Pertanian <br className="hidden md:block" />
              <span className="text-3xl md:text-5xl">Dimulai dari Sini</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto animate-fade-in animation-delay-500 leading-relaxed font-light">
              Bergabunglah dengan <span className="font-bold text-yellow-300">5000+ petani sukses</span> yang telah merasakan transformasi luar biasa dengan solusi pertanian terdepan dari Firman Tani
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animation-delay-700">
              <Link
                to="/products"
                className="group bg-gradient-to-r from-white to-green-50 text-green-800 px-10 py-4 rounded-2xl font-display font-semibold hover:from-green-50 hover:to-white transition-all duration-500 inline-flex items-center justify-center space-x-3 hover-scale hover:shadow-2xl shadow-lg transform hover:-translate-y-2"
              >
                <span className="text-lg">Mulai Transformasi</span>
                <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              </Link>
              <Link
                to="/contact"
                className="group border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white px-10 py-4 rounded-2xl font-display font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-500 hover-scale transform hover:-translate-y-2"
              >
                <span className="text-lg">Konsultasi Premium</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
