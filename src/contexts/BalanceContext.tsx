import { createContext, ReactNode, useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

interface BalanceContextData {
  balance: number;
  addBalance: (amount: number) => void;
  subtractBalance: (amount: number) => void;
  transactions: Transaction[];
}

interface Transaction {
  id: string;
  type: 'deposit' | 'withdraw' | 'bet' | 'win';
  amount: number;
  date: Date;
  description: string;
}

export const BalanceContext = createContext<BalanceContextData>({} as BalanceContextData);

interface BalanceProviderProps {
  children: ReactNode;
}

export function BalanceProvider({ children }: BalanceProviderProps) {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // Load balance from localStorage
      const storedBalance = localStorage.getItem(`@LuckyTiger:balance:${user.id}`);
      const storedTransactions = localStorage.getItem(`@LuckyTiger:transactions:${user.id}`);
      
      if (storedBalance) {
        setBalance(parseFloat(storedBalance));
      } else {
        // Give new users a welcome bonus
        setBalance(100);
        saveTransaction({
          id: crypto.randomUUID(),
          type: 'deposit',
          amount: 100,
          date: new Date(),
          description: 'Bônus de boas-vindas'
        });
      }
      
      if (storedTransactions) {
        setTransactions(JSON.parse(storedTransactions));
      }
    } else {
      setBalance(0);
      setTransactions([]);
    }
  }, [user]);

  const saveBalance = (newBalance: number) => {
    if (user) {
      localStorage.setItem(`@LuckyTiger:balance:${user.id}`, newBalance.toString());
    }
  };

  const saveTransaction = (transaction: Transaction) => {
    if (user) {
      const newTransactions = [...transactions, transaction];
      setTransactions(newTransactions);
      localStorage.setItem(`@LuckyTiger:transactions:${user.id}`, JSON.stringify(newTransactions));
    }
  };

  const addBalance = (amount: number) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
    saveBalance(newBalance);
    
    saveTransaction({
      id: crypto.randomUUID(),
      type: amount > 0 ? 'deposit' : 'win',
      amount,
      date: new Date(),
      description: amount > 0 ? 'Depósito' : 'Ganho em jogo'
    });
  };

  const subtractBalance = (amount: number) => {
    if (balance >= amount) {
      const newBalance = balance - amount;
      setBalance(newBalance);
      saveBalance(newBalance);
      
      saveTransaction({
        id: crypto.randomUUID(),
        type: 'bet',
        amount,
        date: new Date(),
        description: 'Aposta'
      });
      
      return true;
    }
    
    return false;
  };

  return (
    <BalanceContext.Provider value={{ balance, addBalance, subtractBalance, transactions }}>
      {children}
    </BalanceContext.Provider>
  );
}