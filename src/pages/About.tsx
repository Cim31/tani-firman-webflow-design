
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, Leaf, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Users, number: '5000+', label: 'Petani Terlayani' },
    { icon: Award, number: '15+', label: 'Tahun Pengalaman' },
    { icon: Leaf, number: '500+', label: 'Produk Berkualitas' },
    { icon: Target, number: '98%', label: 'Kepuasan Pelanggan' },
  ];

  const values = [
    {
      title: 'Kualitas Terjamin',
      description: 'Semua produk kami telah melewati kontrol kualitas ketat untuk memastikan hasil panen terbaik.',
      icon: CheckCircle,
    },
    {
      title: 'Harga Terjangkau',
      description: 'Kami berkomitmen memberikan harga yang kompetitif tanpa mengorbankan kualitas produk.',
      icon: Target,
    },
    {
      title: 'Pelayanan Prima',
      description: 'Tim ahli kami siap memberikan konsultasi dan solusi terbaik untuk kebutuhan pertanian Anda.',
      icon: Users,
    },
    {
      title: 'Ramah Lingkungan',
      description: 'Kami mengutamakan produk-produk yang ramah lingkungan dan sustainable.',
      icon: Leaf,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Firman Tani</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Mitra terpercaya petani Indonesia dalam menyediakan kebutuhan pertanian berkualitas tinggi
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cerita Kami</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Toko Firman Tani didirikan pada tahun 2009 dengan visi sederhana namun mulia: membantu petani Indonesia 
                  meningkatkan produktivitas dan kesejahteraan melalui penyediaan sarana pertanian berkualitas tinggi.
                </p>
                <p>
                  Berawal dari sebuah toko kecil di daerah pedesaan, kami terus berkembang dengan semangat melayani 
                  kebutuhan petani lokal. Pengalaman lebih dari 15 tahun telah mengukuhkan posisi kami sebagai 
                  distributor terpercaya berbagai produk pertanian.
                </p>
                <p>
                  Kini, Firman Tani telah melayani ribuan petani di seluruh Indonesia dengan komitmen yang sama: 
                  memberikan produk terbaik dengan harga yang terjangkau dan layanan yang memuaskan.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Tentang Firman Tani"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-green-600 bg-opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Pencapaian Kami</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Target className="h-6 w-6 text-green-600 mr-3" />
                Visi Kami
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi distributor sarana pertanian terdepan di Indonesia yang berkontribusi nyata 
                dalam meningkatkan produktivitas dan kesejahteraan petani melalui inovasi dan 
                pelayanan terbaik.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Leaf className="h-6 w-6 text-green-600 mr-3" />
                Misi Kami
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Menyediakan produk pertanian berkualitas tinggi</li>
                <li>• Memberikan harga yang kompetitif dan terjangkau</li>
                <li>• Memberikan layanan konsultasi pertanian</li>
                <li>• Mendukung pertanian berkelanjutan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
