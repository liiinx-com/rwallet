import React from "react";
import View from "./View";
// import { SCREENS_NAME } from "../index";
// import { useTransactions } from "../../api/my";

const index = ({ route, navigation }) => {
  const { asset } = route.params;

  //   const {
  //     isError,
  //     isLoading,
  //     isSuccess,
  //     data: transactions,
  //     error,
  //   } = useTransactions(asset.symbol);

  const sendHandler = (asset) => {
    console.log("send", asset.symbol);
  };
  const receiveHandler = (asset) => {
    console.log("receive", asset.symbol);
  };

  const backHandler = () => {
    console.log("hhhhhhhhhere");
    navigation.goBack();
  };

  const handleSelectTransaction = (transaction) => {
    //navigation.navigate(SCREENS_NAME.RECEIPT, { transaction });
  };

  const viewProps = {
    asset,
    // transactionsQuery: {
    //   isError,
    //   isLoading,
    //   isSuccess,
    //   transactions,
    //   error,
    // },
    backHandler,
    sendHandler,
    receiveHandler,
    handleSelectTransaction,
  };

  return <View {...viewProps} />;
};

export default index;
