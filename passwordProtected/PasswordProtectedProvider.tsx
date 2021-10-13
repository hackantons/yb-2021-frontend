import React from 'react';

interface PasswordProtectedContextI {
  isAuthenticated: boolean;
  init: boolean;
  doLogin: (password: string) => Promise<boolean>;
}

const defaultValues: PasswordProtectedContextI = {
  isAuthenticated: false,
  init: false,
  doLogin: async (t) => Boolean(t),
};

const PasswordProtectedContext =
  React.createContext<PasswordProtectedContextI>(defaultValues);

export const PasswordProtectedProvider = ({
  children,
  checkApiUrl = '/api/password-protected/check',
  loginApiUrl = '/api/password-protected/login',
}: {
  children: JSX.Element;
  checkApiUrl?: string;
  loginApiUrl?: string;
}) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(null);
  const [init, setInit] = React.useState<boolean>(false);

  const checkIfLoggedIn = (): Promise<boolean> =>
    new Promise((resolve, reject) =>
      fetch(checkApiUrl, {
        credentials: 'include',
      })
        .then((res) => {
          if (res.status === 200) {
            setIsAuthenticated(true);
            resolve(true);
          } else {
            setIsAuthenticated(false);
            reject();
          }
        })
        .catch(() => setIsAuthenticated(false))
    );

  const doLogin = (password: string): Promise<boolean> =>
    new Promise((resolve, reject) =>
      fetch(loginApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })
        .then((res) => {
          if (res.status === 200) {
            return true;
          } else {
            return res.json();
          }
        })
        .then((data) => {
          if (data === true) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            reject(data?.message || 'An unexpected error occured');
          }
        })
    );

  React.useEffect(() => {
    checkIfLoggedIn().finally(() => setInit(true));
  }, []);

  return (
    <PasswordProtectedContext.Provider
      value={{ isAuthenticated, init, doLogin }}
    >
      {children}
    </PasswordProtectedContext.Provider>
  );
};

export const usePasswordProtected = () =>
  React.useContext(PasswordProtectedContext);
