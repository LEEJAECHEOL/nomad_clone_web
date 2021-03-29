import { Button } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../components/AppLayout";
import Course from "../../components/Course";
import { CourseBox, PageHero } from "../../components/style";
import { coursesOneGetRequestAction } from "../../reducers/courses";
import { PurchaseContainer } from "./style";

const Purchase = ({ match }) => {
  const courseId = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coursesOneGetRequestAction(courseId));
  }, []);

  const { coursesItem } = useSelector((state) => state.courses);
  console.log("펄체이스아이템", coursesItem);
  return (
    <>
      <AppLayout>
        <PageHero>
          <h1>Complete Purchase</h1>
        </PageHero>
        <PurchaseContainer>
          <div className="purchaseInfo">
            <div className="purchaseInfoLeft">
              <div>
                <img
                  src={
                    coursesItem !== null ? coursesItem.previewImage.url : null
                  }
                  alt=""
                />
                <div className="courseInfo">
                  <h3>{coursesItem !== null ? coursesItem.title : null}</h3>
                  <p>{coursesItem !== null ? coursesItem.subTitle : null}</p>
                </div>
              </div>
            </div>
            <div className="purchaseInfoRight">
              <div>
                <h2>Complete Purchase</h2>
                <div className="totalPrice">
                  <h3>
                    <span>최종가격 : </span>
                    <b>
                      ₩&nbsp;{coursesItem !== null ? coursesItem.price : null}
                    </b>
                  </h3>
                </div>
              </div>
              <Button type="primary">Pay now</Button>
            </div>
          </div>
        </PurchaseContainer>
      </AppLayout>
    </>
  );
};

export default Purchase;