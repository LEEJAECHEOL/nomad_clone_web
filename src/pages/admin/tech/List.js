import { Card } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminTechBtn from "../../../components/AdminTechBtn";
import AppLayout from "../../../components/AppLayout";
import TechItem from "../../../components/TechItem";
import { techGetRequestAction } from "../../../reducers/admin/tech";
import { RightCard } from "../../faq/style";
import { TechListContainer } from "./style";

const List = () => {
  const dispatch = useDispatch();

  const { techList } = useSelector((state) => state.admintech);

  useEffect(() => {
    console.log("유즈이펙트 발동?");
    dispatch(techGetRequestAction());
  }, []);

  return (
    <>
      <AppLayout>
        <Card bordered={false} title="Tech 리스트">
          <TechListContainer>
            {techList !== null
              ? techList.map((list) => (
                  <>
                    <TechItem list={list} />
                  </>
                ))
              : null}
          </TechListContainer>
          <RightCard bordered={false}>
            <AdminTechBtn />
          </RightCard>
        </Card>
      </AppLayout>
    </>
  );
};

export default List;
