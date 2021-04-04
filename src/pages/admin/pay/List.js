import { Card, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../../components/AppLayout";
import { payGetRequestAction } from "../../../reducers/pay";
import RefundedButton from "../../../components/RefundedButton";
const List = () => {
  const columns = [
    {
      title: "결제일자",
      dataIndex: "date",
    },
    {
      title: "코스명",
      dataIndex: "course",
    },
    {
      title: "구매자",
      dataIndex: "customer",
    },
    {
      title: "금액",
      dataIndex: "price",
    },
    {
      title: "상태",
      dataIndex: "state",
    },
    {
      title: "환불",
      dataIndex: "refund",
      render: (dataIndex) => <RefundedButton data={dataIndex} />,
    },
  ];
  const dispatch = useDispatch();
  const { payList } = useSelector((state) => state.pay);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(payGetRequestAction());
  }, []);

  useEffect(() => {
    const list = [];
    for (let index in payList) {
      const data = { id: payList[index].id, status: payList[index].status };

      list.push({
        key: index,
        date: payList[index].createDate.substr(0, 10),
        course: payList[index].name,
        customer: payList[index].buyer_name,
        price: payList[index].paid_amount,
        state: payList[index].status,
        refund: data,
      });
    }
    setData(list);
  }, [payList]);
  return (
    <>
      <AppLayout>
        <Card bordered={false} title="결제리스트">
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ defaultPageSize: 1000, hideOnSinglePage: true }}
            scroll={{ y: 400 }}
          />
        </Card>
      </AppLayout>
    </>
  );
};

export default List;
