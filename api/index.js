const chartData = [
  { x: 1453075200, y: 1.47 },
  { x: 1453161600, y: 1.37 },
  { x: 1453248000, y: 1.53 },
  { x: 1453334400, y: 1.54 },
  { x: 1453420800, y: 1.52 },
  { x: 1453507200, y: 2.03 },
  { x: 1453593600, y: 2.1 },
  { x: 1453680000, y: 2.5 },
  { x: 1453766400, y: 2.3 },
  { x: 1453852800, y: 2.42 },
  { x: 1453939200, y: 2.55 },
  { x: 1454025600, y: 2.41 },
  { x: 1454112000, y: 2.43 },
  { x: 1454198400, y: 2.2 },
];
const wallet = {
  assets: [
    {
      symbol: "CDN",
      name: "Canadian Dollar",
      size: "0.0",
      value: "0",
      avatar: "royal_black_CDN_use_util_function",
      currencyCode: "USD",
      currencySign: "$",
      assetValue: "1.00",
    },
    {
      symbol: "TIK",
      name: "Tikcoin",
      size: "90000",
      value: "4056500",
      avatar: "royal_black_TIK_use_util_function",
      currencyCode: "USD",
      currencySign: "$",
      assetValue: "1.85",
    },
    {
      symbol: "BTC",
      name: "Bitcoin",
      size: "10236",
      value: "3027781.9688",
      avatar: "royal_black_BTC_use_util_function",
      currencyCode: "USD",
      currencySign: "$",
      assetValue: "32000.8558",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      size: "0.0",
      value: "0",
      avatar: "royal_black_ETH_use_util_function",
      currencyCode: "USD",
      currencySign: "$",
      assetValue: "1.85",
    },
    {
      symbol: "DOGE",
      name: "Dogecoin",
      size: "0.0",
      value: "0",
      avatar: "royal_black_DOGE_use_util_function",
      currencyCode: "USD",
      currencySign: "$",
      assetValue: "0.25",
    },
    {
      symbol: "XRP",
      name: "XRP",
      size: "0.0",
      value: "0",
      avatar: "royal_black_XRP_use_util_function",
      currencyCode: "USD",
      currencySign: "$",
      assetValue: "0.35",
    },
  ],
  totalValue: "7078042.819688",
  currencyCode: "USD",
  currencySign: "$",
};

const cryptoMarketData = [
  {
    symbol: "TIK",
    name: "Tikcoin",
    avatar: "royal_black_TIK_use_util_function",
    currencyCode: "USD",
    currencySign: "$",
    assetValue: "1.85",
    chartData,
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    avatar: "royal_black_BTC_use_util_function",
    currencyCode: "USD",
    currencySign: "$",
    assetValue: "32000.8558",
    chartData,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    avatar: "royal_black_ETH_use_util_function",
    currencyCode: "USD",
    currencySign: "$",
    assetValue: "1.85",
    chartData,
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    avatar: "royal_black_DOGE_use_util_function",
    currencyCode: "USD",
    currencySign: "$",
    assetValue: "0.25",
    chartData,
  },
  {
    symbol: "XRP",
    name: "XRP",
    avatar: "royal_black_XRP_use_util_function",
    currencyCode: "USD",
    currencySign: "$",
    assetValue: "0.35",
    chartData,
  },
];

const tikTransactions = [
  {
    status: "COMPLETED",
    size: "100236",
    valueUsd: "900.72",
    txFeeUsd: "0.015  ",
    txFee: "0.000298",
    senderNote: null,
    hash: "0xbddd46713d9941864c120be9a9d1c5579c1003b03ee2d83ade138ccff570c3f3",
    confirmedAt: "2021-07-21T15:01:56.883Z",
    internal: false,
    symbol: "TIK",
    from: "FROM",
    to: "TO",
  },
];

export const getMyWallet = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: wallet });
    }, 1700);
  });

export const getCryptoMarketData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: cryptoMarketData });
    }, 1700);
  });

export const getRealEstateMarketData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: [] });
    }, 1700);
  });

export const getAssetTransactions = (symbol) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: tikTransactions });
    }, 1700);
  });
