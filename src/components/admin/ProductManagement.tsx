
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import pupukOrganik from '@/assets/pupuk-organik.jpg';
import benihPadi from '@/assets/benih-padi.jpg';
import pestisida from '@/assets/pestisida.jpg';
import benihJagung from '@/assets/benih-jagung.jpg';
import pupukCair from '@/assets/pupuk-cair.jpg';
import insektisida from '@/assets/insektisida.jpg';
import cangkul from '@/assets/cangkul.jpg';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string;
}

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Pupuk Organik Premium',
      price: 25000,
      stock: 100,
      description: 'Pupuk organik berkualitas tinggi untuk pertumbuhan tanaman optimal',
      image: pupukOrganik
    },
    {
      id: 2,
      name: 'Benih Padi Unggul',
      price: 15000,
      stock: 200,
      description: 'Benih padi varietas unggul dengan hasil panen maksimal',
      image: benihPadi
    },
    {
      id: 3,
      name: 'Pestisida Organik',
      price: 35000,
      stock: 50,
      description: 'Pestisida ramah lingkungan untuk melindungi tanaman dari hama',
      image: pestisida
    },
    {
      id: 4,
      name: 'Benih Jagung Hibrida',
      price: 20000,
      stock: 150,
      description: 'Benih jagung hibrida dengan produktivitas tinggi',
      image: benihJagung
    },
    {
      id: 5,
      name: 'Pupuk Cair NPK',
      price: 18000,
      stock: 75,
      description: 'Pupuk cair lengkap dengan kandungan NPK untuk nutrisi tanaman',
      image: pupukCair
    },
    {
      id: 6,
      name: 'Insektisida Alami',
      price: 28000,
      stock: 60,
      description: 'Insektisida berbahan alami yang aman untuk lingkungan',
      image: insektisida
    }
  ]);

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    stock: 0,
    description: '',
    image: pupukOrganik
  });

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      stock: product.stock,
      description: product.description,
      image: product.image
    });
  };

  const handleSave = () => {
    if (editingProduct) {
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...editingProduct, ...formData }
          : p
      ));
      setEditingProduct(null);
    } else if (isAddingNew) {
      const newProduct = {
        id: Date.now(),
        ...formData
      };
      setProducts([...products, newProduct]);
      setIsAddingNew(false);
    }
    setFormData({ name: '', price: 0, stock: 0, description: '', image: pupukOrganik });
  };

  const handleDelete = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setIsAddingNew(false);
    setFormData({ name: '', price: 0, stock: 0, description: '', image: pupukOrganik });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Kelola Produk</h2>
        <Button onClick={() => setIsAddingNew(true)} className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Tambah Produk
        </Button>
      </div>

      {/* Form untuk edit/tambah */}
      {(editingProduct || isAddingNew) && (
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle>
              {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Nama Produk</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Masukkan nama produk"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Harga (Rp)</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                  placeholder="Masukkan harga"
                />
              </div>
              <div>
                <Label htmlFor="stock">Stok</Label>
                <Input
                  id="stock"
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData({...formData, stock: Number(e.target.value)})}
                  placeholder="Masukkan jumlah stok"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Deskripsi</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Masukkan deskripsi produk"
                rows={3}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                <Save className="h-4 w-4 mr-2" />
                Simpan
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" />
                Batal
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Daftar produk */}
      <div className="grid gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="font-medium">Harga: Rp {product.price.toLocaleString()}</span>
                    <span className="font-medium">Stok: {product.stock}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleEdit(product)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDelete(product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
