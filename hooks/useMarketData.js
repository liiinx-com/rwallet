import React, { useState, useEffect } from "react";
import { getCryptoMarketData, getRealEstateMarketData } from "../api";

export const MARKETS = {
  CRYPTO: "crypto",
  REAL_ESTATE: "realestate",
};

const useMarketData = (type = MARKETS.CRYPTO) => {
  const [marketData, setMarketData] = useState({
    isLoading: false,
    isError: null,
    data: {},
  });

  const { isError, isLoading, data } = marketData;

  useEffect(() => {
    const load = async () => {
      const dataLoader =
        type === MARKETS.CRYPTO ? getCryptoMarketData : getRealEstateMarketData;
      setMarketData({ ...marketData, isLoading: true });
      const { data } = await dataLoader();
      setMarketData({ ...marketData, isLoading: false, data });
    };
    load();
  }, [type]);

  return { data, isLoading, isError };
};

export default useMarketData;
