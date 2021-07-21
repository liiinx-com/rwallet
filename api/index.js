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
      value: "166500",
      avatar: "royal_black_TIK_use_util_function",
      currencyCode: "USD",
      currencySign: "$",
      assetValue: "1.85",
    },
    {
      symbol: "BTC",
      name: "Bitcoin",
      size: "100236",
      value: "3207637781.9688",
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
  totalValue: "3207804281.9688",
  currencyCode: "USD",
  currencySign: "$",
};

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

export const getAssetTransactions = (symbol) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: tikTransactions });
    }, 1700);
  });
