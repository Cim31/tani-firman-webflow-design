
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      details: ['Jl. Poros Bakaru, Pinrang', 'Kec Lembang, 92534'],
    },
    {
      icon: Phone,
      title: 'Telepon',
      details: ['0812-3456-7890', '021-1234-5678'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@firmantani.com', 'support@firmantani.com'],
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: ['Senin - Sabtu: 08:00 - 17:00', 'Minggu: Tutup'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Hubungi Kami</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Kami siap membantu Anda dengan kebutuhan pertanian. Jangan ragu untuk menghubungi kami!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 text-center hover-scale transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  <info.icon className="h-8 w-8 text-green-600 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm mb-1 transition-colors duration-300 hover:text-green-600">{detail}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-400"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-400"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-400"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <select
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-400"
                      value={formData.subject}
                      onChange={handleInputChange}
                    >
                      <option value="">Pilih Subjek</option>
                      <option value="Pertanyaan Produk">Pertanyaan Produk</option>
                      <option value="Konsultasi Pertanian">Konsultasi Pertanian</option>
                      <option value="Keluhan">Keluhan</option>
                      <option value="Saran">Saran</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-400"
                    placeholder="Tuliskan pesan Anda di sini..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 hover-scale hover:shadow-lg"
                >
                  <Send className="h-5 w-5 transition-transform duration-300" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Lokasi Kami</h2>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6 hover:bg-gray-300 transition-colors duration-300 cursor-pointer" 
                   onClick={() => window.open('https://maps.app.goo.gl/ixNF4zWYgGswwCpG9', '_blank')}>
                <div className="text-center text-gray-500 hover:text-gray-600 transition-colors duration-300">
                  <MapPin className="h-12 w-12 mx-auto mb-2 animate-pulse" />
                  <p className="font-semibold">Klik untuk membuka peta</p>
                  <p className="text-sm">Jl. Poros Bakaru, Pinrang, Kec Lembang</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Cara Menuju Lokasi:</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li className="hover:text-green-600 transition-colors duration-300">• Dari pusat kota Pinrang, ambil jalan menuju Kecamatan Lembang</li>
                  <li className="hover:text-green-600 transition-colors duration-300">• Ikuti Jl. Poros Bakaru hingga menemukan toko kami</li>
                  <li className="hover:text-green-600 transition-colors duration-300">• Toko berada di jalur utama Poros Bakaru, mudah ditemukan</li>
                  <li className="hover:text-green-600 transition-colors duration-300">• Tersedia area parkir yang luas untuk motor dan mobil</li>
                  <li className="hover:text-green-600 transition-colors duration-300">• Dapat diakses dengan kendaraan umum atau pribadi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
