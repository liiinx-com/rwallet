import React, { useState, useEffect } from "react";
import { getAssetTransactions } from "../api";

const useAssetTransactions = (symbol) => {
  const [transactions, setTransactions] = useState({
    isLoading: false,
    isError: null,
    data: [],
  });

  const { isError, isLoading, data } = transactions;

  useEffect(() => {
    const load = async () => {
      setTransactions({ ...transactions, isLoading: true });
      const { data } = await getAssetTransactions(symbol);
      setTransactions({ ...transactions, isLoading: false, data });
    };
    load();
  }, [symbol]);

  return { data, isLoading, isError };
};

export default useAssetTransactions;
