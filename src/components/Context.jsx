import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const myContext = createContext({});

const Context = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/account/me`,
        {
          withCredentials: true,
        }
      );
      if (data.status) setUser(data.data);
      return;
    };
    fetchUser();
  }, [user]);

  return <myContext.Provider value={user}>{children}</myContext.Provider>;
};

export default Context;
