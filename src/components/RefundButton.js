import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { refundPutRequestAction } from "../reducers/pay";

const RefundButton = ({ data }) => {
  const dispatch = useDispatch();

  const onClickRefund = () => {
    const id = { payId: data.id };
    dispatch(refundPutRequestAction(id));
  };
  return (
    <>
      {data.status === "paid" ? (
        <>
          <Button onClick={onClickRefund}>환불신청</Button>
        </>
      ) : null}
    </>
  );
};

export default RefundButton;
