
import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  name: string;
  isAdmin?: boolean;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string, name?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string, name?: string) => {
    console.log('Login attempt:', { email, password, name });
    
    // Check if it's admin login
    const isAdmin = email === 'Firman67muh@gmail.com' && password === '123123';
    
    setIsLoggedIn(true);
    setUser({ 
      email, 
      name: name || (isAdmin ? 'Admin Firman' : email.split('@')[0]),
      isAdmin
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
