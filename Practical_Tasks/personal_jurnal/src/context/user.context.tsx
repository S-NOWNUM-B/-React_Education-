import { createContext, useState } from "react";
import type { ReactNode } from "react";

export interface UserContextType {
  userId: number;
  setUserId: (id: number) => void;
}

export const UserContext = createContext<UserContextType>({
  userId: 1,
  setUserId: () => {},
});

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userId, setUserId] = useState<number>(1);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
}
