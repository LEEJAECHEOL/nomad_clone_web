import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { refundPutRequestAction } from "../reducers/pay";

const RefundButton = ({ payId }) => {
  const dispatch = useDispatch();

  const onClickRefund = () => {
    const id = { payId: payId };
    dispatch(refundPutRequestAction(id));
  };
  return <Button onClick={onClickRefund}>환불신청</Button>;
};

export default RefundButton;
