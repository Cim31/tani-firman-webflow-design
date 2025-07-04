
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Package, Users, TrendingUp, X } from 'lucide-react';
import ProductManagement from './admin/ProductManagement';
import UserManagement from './admin/UserManagement';
import FinancialReport from './admin/FinancialReport';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminModal = ({ isOpen, onClose }: AdminModalProps) => {
  const [activeTab, setActiveTab] = useState<'products' | 'users' | 'reports'>('products');

  const tabs = [
    { id: 'products', label: 'Kelola Produk', icon: Package },
    { id: 'users', label: 'Kelola Pengguna', icon: Users },
    { id: 'reports', label: 'Laporan Keuangan', icon: TrendingUp },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Panel Admin</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col sm:flex-row gap-4 h-full">
          {/* Sidebar */}
          <div className="w-full sm:w-48 border-b sm:border-b-0 sm:border-r pb-4 sm:pb-0 sm:pr-4">
            <div className="flex sm:flex-col gap-2">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab(tab.id as any)}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'products' && <ProductManagement />}
            {activeTab === 'users' && <UserManagement />}
            {activeTab === 'reports' && <FinancialReport />}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminModal;
