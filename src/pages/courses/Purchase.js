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
  const { coursesItem, coursesOneGetLoading } = useSelector(
    (state) => state.courses
  );
  const { principal } = useSelector((state) => state.user);
  const onClickPayment = () => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init(process.env.REACT_APP_IAMPORT_KEY);

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: coursesItem.price, // 결제금액
      name: coursesItem.title, // 주문명
      buyer_name: principal.name, // 구매자 이름
      buyer_email: principal.email, // 구매자 이메일
    };
    console.log(data);

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };
  /* 3. 콜백 함수 정의하기 */
  const callback = (response) => {
    console.log(response);
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  useEffect(() => {
    dispatch(coursesOneGetRequestAction(courseId));
  }, []);

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
              <Button
                type="primary"
                loading={coursesOneGetLoading}
                onClick={onClickPayment}
              >
                Pay now
              </Button>
            </div>
          </div>
        </PurchaseContainer>
      </AppLayout>
    </>
  );
};

export default Purchase;
