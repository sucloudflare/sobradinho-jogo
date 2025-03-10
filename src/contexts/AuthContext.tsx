import { createContext, ReactNode, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  lastLogin: Date;
  ip: string;
}

interface AuthContextData {
  user: User | null;
  login: (email: string, username: string) => Promise<void>;
  register: (email: string, username: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load user from localStorage
    const storedUser = localStorage.getItem('@LuckyTiger:user');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    setLoading(false);
  }, []);

  const getUserIP = async (): Promise<string> => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error fetching IP:', error);
      return '0.0.0.0'; // Fallback IP
    }
  };

  const login = async (email: string, username: string): Promise<void> => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const ip = await getUserIP();
      
      // Check if user exists in localStorage
      const storedUsers = localStorage.getItem('@LuckyTiger:users') || '[]';
      const users = JSON.parse(storedUsers);
      
      const existingUser = users.find((u: User) => u.email === email);
      
      if (existingUser) {
        // Update last login
        existingUser.lastLogin = new Date();
        existingUser.ip = ip;
        
        localStorage.setItem('@LuckyTiger:users', JSON.stringify(users));
        localStorage.setItem('@LuckyTiger:user', JSON.stringify(existingUser));
        Cookies.set('@LuckyTiger:token', uuidv4(), { expires: 7 });
        
        setUser(existingUser);
      } else {
        throw new Error('Usuário não encontrado');
      }
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, username: string): Promise<void> => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const ip = await getUserIP();
      
      // Check if user already exists
      const storedUsers = localStorage.getItem('@LuckyTiger:users') || '[]';
      const users = JSON.parse(storedUsers);
      
      const existingUser = users.find((u: User) => u.email === email);
      
      if (existingUser) {
        throw new Error('E-mail já cadastrado');
      }
      
      // Create new user
      const newUser: User = {
        id: uuidv4(),
        username,
        email,
        createdAt: new Date(),
        lastLogin: new Date(),
        ip
      };
      
      users.push(newUser);
      
      localStorage.setItem('@LuckyTiger:users', JSON.stringify(users));
      localStorage.setItem('@LuckyTiger:user', JSON.stringify(newUser));
      Cookies.set('@LuckyTiger:token', uuidv4(), { expires: 7 });
      
      setUser(newUser);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('@LuckyTiger:user');
    Cookies.remove('@LuckyTiger:token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}