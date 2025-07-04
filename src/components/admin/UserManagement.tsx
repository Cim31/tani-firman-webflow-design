
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, UserCheck, UserX, Mail, Phone } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  joinDate: string;
  totalOrders: number;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@email.com',
      phone: '081234567890',
      status: 'active',
      joinDate: '2024-01-15',
      totalOrders: 5
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@email.com',
      phone: '081234567891',
      status: 'active',
      joinDate: '2024-02-20',
      totalOrders: 3
    },
    {
      id: 3,
      name: 'Bob Wilson',
      email: 'bob@email.com',
      phone: '081234567892',
      status: 'inactive',
      joinDate: '2024-01-10',
      totalOrders: 1
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleUserStatus = (userId: number) => {
    setUsers(users.map(user =>
      user.id === userId
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
        : user
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Kelola Pengguna</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Cari pengguna..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{users.length}</div>
              <div className="text-sm text-gray-600">Total Pengguna</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {users.filter(u => u.status === 'active').length}
              </div>
              <div className="text-sm text-gray-600">Pengguna Aktif</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {users.reduce((sum, user) => sum + user.totalOrders, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Pesanan</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Daftar pengguna */}
      <div className="grid gap-4">
        {filteredUsers.map((user) => (
          <Card key={user.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{user.name}</h3>
                    <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                      {user.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {user.phone}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span>Bergabung: {new Date(user.joinDate).toLocaleDateString('id-ID')}</span>
                    <span>Total Pesanan: {user.totalOrders}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={user.status === 'active' ? 'destructive' : 'default'}
                    size="sm"
                    onClick={() => toggleUserStatus(user.id)}
                  >
                    {user.status === 'active' ? (
                      <>
                        <UserX className="h-4 w-4 mr-2" />
                        Nonaktifkan
                      </>
                    ) : (
                      <>
                        <UserCheck className="h-4 w-4 mr-2" />
                        Aktifkan
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Tidak ada pengguna yang ditemukan
        </div>
      )}
    </div>
  );
};

export default UserManagement;
