import { Card, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPayGetRequestAction } from "../reducers/pay";

const DashBoardPayment = ({ match }) => {
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
  ];
  const dispatch = useDispatch();
  const { userPayList } = useSelector((state) => state.pay);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(userPayGetRequestAction(match));
  }, []);

  useEffect(() => {
    const list = [];
    for (let index in userPayList) {
      list.push({
        key: index,
        date: userPayList[index].createDate.substr(0, 10),
        course: userPayList[index].name,
        customer: userPayList[index].buyer_name,
        price: userPayList[index].paid_amount,
        state: userPayList[index].status,
      });
    }
    setData(list);
  }, [userPayList]);

  return (
    <div>
      <Card bordered={false} title="결제리스트">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ defaultPageSize: 1000, hideOnSinglePage: true }}
          scroll={{ y: 400 }}
        />
      </Card>
    </div>
  );
};

export default DashBoardPayment;
