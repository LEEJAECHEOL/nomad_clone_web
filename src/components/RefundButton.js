import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { refundPostRequestAction } from "../reducers/pay";

const RefundButton = ({ payId }) => {
  const dispatch = useDispatch();

  const onClickRefund = () => {
    const id = { payId: payId };
    dispatch(refundPostRequestAction(id));
  };
  return <Button onClick={onClickRefund}>환불신청</Button>;
};

export default RefundButton;
