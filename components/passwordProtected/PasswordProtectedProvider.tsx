import React from 'react';

interface PasswordProtectedContextI {
  isAuthenticated: boolean;
}

const defaultValues: PasswordProtectedContextI = {
  isAuthenticated: false,
};

const PasswordProtectedContext =
  React.createContext<PasswordProtectedContextI>(defaultValues);

export const PasswordProtectedProvider = ({
  children,
  checkApiUrl = '/api/passwordCheck',
  loginApiUrl = '/api/login',
}: {
  children: JSX.Element;
  checkApiUrl?: string;
  loginApiUrl?: string;
}) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(null);

  const checkIfLoggedIn = async () => {
    try {
      const res = await fetch(checkApiUrl, {
        credentials: 'include',
      });

      if (res.status === 200) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (e) {
      setIsAuthenticated(false);
    }
  };

  React.useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <PasswordProtectedContext.Provider value={{ isAuthenticated }}>
      {isAuthenticated === null ? null : isAuthenticated === false ? (
        <p>login</p>
      ) : (
        children
      )}
    </PasswordProtectedContext.Provider>
  );
};

export const usePasswordProtected = () => {
  const context = React.useContext(PasswordProtectedContext);
  return {};
};
