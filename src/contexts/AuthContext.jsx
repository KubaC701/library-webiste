import { createContext, useContext, useState } from 'react';
import { authorizeUser, getActiveUser } from '../helpers/users';

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(getActiveUser());

  const signIn = (credentials) => {
    const user = authorizeUser(credentials.login, credentials.password);
    setUser(user);

    return !!user;
  };

  const signOut = () => {
    setUser(null);
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }

  return context;
};

export default useAuthContext;
