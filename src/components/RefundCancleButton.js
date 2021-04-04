import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { refundCanclePutRequestAction } from "../reducers/pay";

const RefundCancleButton = ({ payId }) => {
  const dispatch = useDispatch();

  const onClickRefundCancle = () => {
    const id = { payId: payId };
    dispatch(refundCanclePutRequestAction(id));
    console.log("환불취소버튼", id);
  };

  return <Button onClick={onClickRefundCancle}>환불취소</Button>;
};

export default RefundCancleButton;
