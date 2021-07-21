import React, { useState, useEffect } from "react";
import { getMyWallet } from "../api";

const useMyWallet = () => {
  const [myWallet, setMyWallet] = useState({
    isLoading: false,
    isError: null,
    data: {},
  });

  const { isError, isLoading, data } = myWallet;

  useEffect(() => {
    const load = async () => {
      setMyWallet({ ...myWallet, isLoading: true });
      const { data } = await getMyWallet();
      setMyWallet({ ...myWallet, isLoading: false, data });
    };
    load();
  }, []);

  return { data, isLoading, isError };
};

export default useMyWallet;
