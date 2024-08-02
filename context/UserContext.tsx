import { createContext, useState, ReactNode, useContext } from 'react';

interface UserContextType {
  nip: string;
  setNip: (nip: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [nip, setNip] = useState('');

  return (
    <UserContext.Provider value={{ nip, setNip }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};