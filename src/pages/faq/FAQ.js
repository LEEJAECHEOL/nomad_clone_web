import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../../components/style";
import { FaqContainer } from "./style";

const FAQ = () => {
  return (
    <>
      <PageHero>
        <h1>FAQ</h1>
        <p>궁금한 것이 있다구요?</p>
      </PageHero>
      <FaqContainer>
        <div className="Faq-Item ">
          <h3>노마드 아카데미</h3>
          <div className="Faq-Item-list">
            <Link>로그인</Link>
            <Link to="/faq-detail">결제</Link>
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
      </FaqContainer>
    </>
  );
};

export default FAQ;
