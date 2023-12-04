import { createContext } from "react";

interface AuthContextProps {
  isSignedIn: boolean;
  signIn: (accessToken: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);
