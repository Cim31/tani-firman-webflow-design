
import { Leaf, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Firman Tani</h3>
                <p className="text-green-200 text-sm">Toko Pertanian Terpercaya</p>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Menyediakan kebutuhan pertanian berkualitas tinggi untuk mendukung produktivitas petani Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-100 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/products" className="text-green-100 hover:text-white transition-colors">Produk</Link></li>
              <li><Link to="/about" className="text-green-100 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/contact" className="text-green-100 hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Kategori Produk</h4>
            <ul className="space-y-2 text-green-100">
              <li>Benih & Bibit</li>
              <li>Pupuk Organik</li>
              <li>Alat Pertanian</li>
              <li>Pestisida Alami</li>
              <li>Perlengkapan Tanam</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Informasi Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">Jl. Pertanian No. 123, Kota Pertanian</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">082151076210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">info@firmantani.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-green-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">Senin - Sabtu: 08:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200 text-sm">
            © 2024 Toko Firman Tani. Semua hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
