
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Download } from 'lucide-react';

const FinancialReport = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('thisMonth');

  // Data dummy untuk laporan keuangan
  const financialData = {
    totalRevenue: 15750000,
    totalOrders: 125,
    averageOrderValue: 126000,
    revenueGrowth: 12.5,
    topProducts: [
      { name: 'Pupuk Organik Premium', revenue: 5000000, orders: 50 },
      { name: 'Benih Padi Unggul', revenue: 3750000, orders: 25 },
      { name: 'Pestisida Alami', revenue: 2500000, orders: 20 },
    ],
    monthlyRevenue: [
      { month: 'Jan', revenue: 12000000 },
      { month: 'Feb', revenue: 13500000 },
      { month: 'Mar', revenue: 15750000 },
    ]
  };

  const exportReport = () => {
    alert('Laporan akan didownload dalam format PDF');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Laporan Keuangan</h2>
        <div className="flex gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Pilih periode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="thisMonth">Bulan Ini</SelectItem>
              <SelectItem value="lastMonth">Bulan Lalu</SelectItem>
              <SelectItem value="thisYear">Tahun Ini</SelectItem>
              <SelectItem value="lastYear">Tahun Lalu</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={exportReport} className="bg-green-600 hover:bg-green-700">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Kartu Statistik Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Pendapatan</p>
                <p className="text-2xl font-bold text-green-600">
                  Rp {financialData.totalRevenue.toLocaleString()}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+{financialData.revenueGrowth}%</span>
              <span className="text-gray-500 ml-1">dari bulan lalu</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Pesanan</p>
                <p className="text-2xl font-bold text-blue-600">
                  {financialData.totalOrders}
                </p>
              </div>
              <ShoppingCart className="h-8 w-8 text-blue-600" />
            </div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+8.2%</span>
              <span className="text-gray-500 ml-1">dari bulan lalu</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Rata-rata Pesanan</p>
                <p className="text-2xl font-bold text-purple-600">
                  Rp {financialData.averageOrderValue.toLocaleString()}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+3.8%</span>
              <span className="text-gray-500 ml-1">dari bulan lalu</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Margin Keuntungan</p>
                <p className="text-2xl font-bold text-orange-600">23.5%</p>
              </div>
              <TrendingDown className="h-8 w-8 text-orange-600" />
            </div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              <span className="text-red-500">-1.2%</span>
              <span className="text-gray-500 ml-1">dari bulan lalu</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grafik Pendapatan Bulanan */}
      <Card>
        <CardHeader>
          <CardTitle>Pendapatan Bulanan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-end justify-center gap-4">
            {financialData.monthlyRevenue.map((data, index) => (
              <div key={data.month} className="flex flex-col items-center">
                <div 
                  className="bg-green-500 w-16 rounded-t"
                  style={{ 
                    height: `${(data.revenue / 20000000) * 200}px` 
                  }}
                ></div>
                <span className="text-sm font-medium mt-2">{data.month}</span>
                <span className="text-xs text-gray-500">
                  {(data.revenue / 1000000).toFixed(1)}M
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Produk Terlaris */}
      <Card>
        <CardHeader>
          <CardTitle>Produk Terlaris</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {financialData.topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.orders} pesanan</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">
                    Rp {product.revenue.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialReport;
