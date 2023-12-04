import { ReactNode, useCallback, useState } from "react";
import { AuthContext } from "../contexts/auth-context";

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(() => {
    if (typeof window !== undefined) {
      return false;
    }
    const storedAccessToken = localStorage.getItem('chat-app:accessToken');
    return Boolean(storedAccessToken);
  })

  const signIn = useCallback(async (accessToken: string) => {
    localStorage.setItem('chat-app:accessToken', accessToken);
    setIsSignedIn(true);
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}