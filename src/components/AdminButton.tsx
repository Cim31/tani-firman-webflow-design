
import { useState } from 'react';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '../contexts/AuthContext';
import AdminModal from './AdminModal';

const AdminButton = () => {
  const { profile } = useAuth();
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  if (!profile?.is_admin) return null;

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setIsAdminOpen(true)}
        className="bg-blue-50 border-blue-200 hover:bg-blue-100"
      >
        <Settings className="h-4 w-4" />
        <span className="hidden sm:inline ml-2">Admin</span>
      </Button>
      <AdminModal 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
      />
    </>
  );
};

export default AdminButton;
