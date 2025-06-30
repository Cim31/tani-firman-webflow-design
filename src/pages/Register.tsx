
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Leaf, UserPlus } from 'lucide-react';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      alert('Password tidak cocok!');
      return;
    }
    
    if (formData.password.length < 6) {
      alert('Password minimal 6 karakter!');
      return;
    }

    // Simulate registration and auto-login
    console.log('Registration attempt:', formData);
    login(formData.email, formData.password);
    navigate('/'); // Redirect to home after registration
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          {/* Logo dan Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-green-600 p-3 rounded-full">
                <Leaf className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Daftar Akun Baru</h1>
            <p className="text-gray-600">Bergabunglah dengan Firman Tani sekarang</p>
          </div>

          {/* Form Registrasi */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nama Lengkap */}
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap Anda"
                  required
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Masukkan email Anda"
                  required
                  className="w-full"
                />
              </div>

              {/* Nomor Telepon */}
              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Masukkan nomor telepon Anda"
                  required
                  className="w-full"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Masukkan password (min. 6 karakter)"
                    required
                    className="w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Konfirmasi Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Ulangi password Anda"
                    required
                    className="w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  Saya setuju dengan{' '}
                  <Link to="/terms" className="text-green-600 hover:text-green-700">
                    Syarat & Ketentuan
                  </Link>{' '}
                  dan{' '}
                  <Link to="/privacy" className="text-green-600 hover:text-green-700">
                    Kebijakan Privasi
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                <UserPlus className="h-4 w-4 mr-2" />
                Daftar Sekarang
              </Button>
            </form>

            {/* Divider */}
            <div className="mt-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">atau</span>
                </div>
              </div>
            </div>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Sudah punya akun?{' '}
                <Link to="/login" className="text-green-600 hover:text-green-700 font-medium">
                  Masuk sekarang
                </Link>
              </p>
            </div>
          </div>

          {/* Info Tambahan */}
          <div className="mt-8 text-center">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-medium text-green-800 mb-2">Keuntungan Bergabung</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Akses ke produk eksklusif</li>
                <li>• Diskon khusus member hingga 20%</li>
                <li>• Konsultasi gratis dengan ahli pertanian</li>
                <li>• Program loyalitas pelanggan</li>
                <li>• Update produk dan tips pertanian terbaru</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
