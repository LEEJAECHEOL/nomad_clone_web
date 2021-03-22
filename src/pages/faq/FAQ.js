import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PageHero } from "../../components/style";
import { faqGetRequestAction } from "../../reducers/faq";
import { FaqContainer } from "./style";

const FAQ = () => {
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(faqGetRequestAction(category));
    console.log("몇번실행되?");
  }, []);

  const { faqList } = useSelector((state) => state.faq);
  console.log("정보는? ", faqList);
  return (
    <>
      <PageHero>
        <h1>FAQ</h1>
        <p>궁금한 것이 있다구요?</p>
      </PageHero>
      <FaqContainer>
        {faqList !== null
          ? faqList.map((list) => (
              <>
                <div className="Faq-Item ">
                  <h3>{list.faqCategory.title}</h3>
                  <div className="Faq-Item-list">
                    <Link to={`/faq/${list.id}`}>{list.title}</Link>
                    <Link>결제</Link>
                    <Link>취소 및 환불정책</Link>
                    <Link>수업 관련 문의</Link>
                    <Link>증빙서류 발급</Link>
                    <Link>슬랙 이용방법</Link>
                    <Link>문의하기</Link>
                  </div>
                </div>
              </>
            ))
          : null}

        {/* <div className="Faq-Item ">
          <h3>노마드 아카데미</h3>
          <div className="Faq-Item-list">
            <Link>로그인</Link>
            <Link>결제</Link>
            <Link>취소 및 환불정책</Link>
            <Link>수업 관련 문의</Link>
            <Link>증빙서류 발급</Link>
            <Link>슬랙 이용방법</Link>
            <Link>문의하기</Link>
          </div>
        </div>
        <div className="Faq-Item ">
          <h3>노마드 아카데미</h3>
          <div className="Faq-Item-list">
            <Link>로그인</Link>
            <Link>결제</Link>
            <Link>취소 및 환불정책</Link>
            <Link>수업 관련 문의</Link>
            <Link>증빙서류 발급</Link>
            <Link>슬랙 이용방법</Link>
            <Link>문의하기</Link>
          </div>
        </div>
        <div className="Faq-Item ">
          <h3>노마드 아카데미</h3>
          <div className="Faq-Item-list">
            <Link>로그인</Link>
            <Link>결제</Link>
            <Link>취소 및 환불정책</Link>
            <Link>수업 관련 문의</Link>
            <Link>증빙서류 발급</Link>
            <Link>슬랙 이용방법</Link>
            <Link>문의하기</Link>
          </div>
        </div> */}
      </FaqContainer>
    </>
  );
};

export default FAQ;
