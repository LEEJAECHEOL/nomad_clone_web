import { Button } from "antd";
import React from "react";

const RefundButton = ({ payId }) => {
  console.log(payId);
  const onClickRefund = (e) => {
    console.log(e);
  };
  return <Button onClick={onClickRefund}>환불신청</Button>;
};

export default RefundButton;
