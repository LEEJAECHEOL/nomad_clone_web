import { Button } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../../components/AppLayout";
import { techGetRequestAction } from "../../../reducers/admin/tech";
import KeyButton from "./KeyButton";
import { TechCard, TechListContainer } from "./style";

const List = () => {
  const dispatch = useDispatch();

  const { techList } = useSelector((state) => state.admintech);

  useEffect(() => {
    console.log("유즈이펙트 발동?");
    dispatch(techGetRequestAction());
  }, []);

  console.log(techList);
  return (
    <>
      <AppLayout>
        <TechListContainer>
          {techList !== null
            ? techList.map((list) => (
                <>
                  <TechCard title={list.title}>
                    <div>
                      <img
                        src={list.file !== null ? list.file.fileUrl : null}
                        alt=""
                      />
                    </div>
                    <div>
                      <KeyButton keys={list.id} />
                    </div>
                  </TechCard>
                </>
              ))
            : null}
        </TechListContainer>
      </AppLayout>
    </>
  );
};

export default List;