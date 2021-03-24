import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import {
  FaqDetailContainer,
  FaqDetailBoard,
  FaqBoardContainer,
  FaqCategory,
  FaqBoardItem,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { faqOneGetRequestAction } from "../../reducers/faq";
import ReactHtmlParser from "react-html-parser";

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const FaqDetail = ({ match }) => {
  // 아이디값
  const data = match.params.id;

  // 디스패쳐
  const dispatch = useDispatch();

  // 아이템
  const { faqItem } = useSelector((state) => state.faq);

  // 유즈이펙트 실행됨?
  useEffect(() => {
    console.log("여기 실행되나요?");
    dispatch(faqOneGetRequestAction(data));
  }, []);

  const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  console.log("이게 디테일 데이터", faqItem);

  return (
    <>
      <FaqDetailContainer justify="center">
        {/* 카테고리 */}
        <FaqCategory span={6}>
          <h3>Table of contents</h3>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ width: 256 }}
          >
            <SubMenu key="sub1" title="노마드 아카데미">
              <Menu.Item key="1">로그인</Menu.Item>
              <Menu.Item key="2">결제</Menu.Item>
              <Menu.Item key="3">취소 및 환불정책</Menu.Item>
              <Menu.Item key="4">수업 관련 문의</Menu.Item>
              <Menu.Item key="5">증빙서류 발급</Menu.Item>
              <Menu.Item key="6">슬랙 이용방법</Menu.Item>
              <Menu.Item key="7">문의하기</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="노마드 챌린지">
              <Menu.Item key="8">챌린지 프로그램 소개</Menu.Item>
              <Menu.Item key="9">챌린지 사용방법</Menu.Item>
              <Menu.Item key="10">챌린지 스케쥴</Menu.Item>
              <Menu.Item key="11">CodeSandBox 사용방법</Menu.Item>
              <Menu.Item key="12">Repl.lt 사용방법</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="졸업작품 및 후기">
              <Menu.Item key="13">코코아 클론 2주 완성반</Menu.Item>
              <Menu.Item key="14">바닐라JS 2주 완성반</Menu.Item>
              <Menu.Item key="15">파이썬 2주 완성반</Menu.Item>
              <Menu.Item key="16">에어비앤비 4주 완성반</Menu.Item>
              <Menu.Item key="17">유튜브 클론 6주 완성반</Menu.Item>
              <Menu.Item key="18">CSS Layout 2주 완성반</Menu.Item>
              <Menu.Item key="19">리액트JS 2주 완성반</Menu.Item>
              <Menu.Item key="20">우버이츠 클론 6주 완성반</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="노마드 커뮤니티">
              <Menu.Item key="21">노마드 코더 소개</Menu.Item>
              <Menu.Item key="22">온라인 커뮤니티</Menu.Item>
              <Menu.Item key="23">오프라인 커뮤니티</Menu.Item>
              <Menu.Item key="24">사이드 프로젝트</Menu.Item>
              <Menu.Item key="25">노마드 온라인 해커톤</Menu.Item>
            </SubMenu>
          </Menu>
        </FaqCategory>

        {/* 중앙 Board */}
        <FaqDetailBoard span={18}>
          <h1 className="faq-title">결제</h1>
          <FaqBoardContainer>
            <FaqBoardItem>
              <div className="faq-detail-title">
                <h3>{faqItem !== null ? faqItem.title : "Title"}</h3>
              </div>

              {faqItem !== null ? ReactHtmlParser(faqItem.content) : "Content"}
            </FaqBoardItem>
            {/* <FaqBoardItem>
              <div className="faq-detail-title">
                <h3>강의별로 결제 합니다.</h3>
              </div>
              <p>각 강의별 책정된 금액에 따라 결제합니다.</p>
              <p>해당 총 금액에 따라 월 할부 결제를 하실 수 있습니다.</p>
              <p>정기구독 결제 방식이 아닙니다! 착오없으시기 바랍니다.</p>
            </FaqBoardItem>
            <FaqBoardItem>
              <div className="faq-detail-title">
                <h3>
                  국내카드 (KRW. 원화) 및 해외카드 (USD) 가 모두 가능합니다.
                </h3>
              </div>
              <p>국내외 신용카드 및 체크카드로 결제가 가능합니다.</p>
              <p>
                해외카드는 VISA, Master, American Express, Maestro 로 결제
                가능합니다.
              </p>
              <p>카카오페이 결제 가능합니다.</p>
              <p>무통장입금은 지원하지 않습니다.</p>
            </FaqBoardItem>
            <FaqBoardItem>
              <div className="faq-detail-title">
                <h3>결제시 오류가 발생합니다.</h3>
              </div>
              <p>해외카드 결제 시 UnionPay. JCB 지원 안됩니다.</p>
              <p>해당 카드에 금액이 부족할 경우</p>
              <p>
                결제모듈은 인터넷 브라우저 크롬 (Chrome)에 최적화 되어있습니다.
              </p>
              <p>국내카드 할부는 신용카드만 가능합니다.</p>
            </FaqBoardItem>
            <FaqBoardItem>
              <div className="faq-detail-title">
                <h3>결제시 오류가 발생합니다.</h3>
              </div>
              <p>해외카드 결제 시 UnionPay. JCB 지원 안됩니다.</p>
              <p>해당 카드에 금액이 부족할 경우</p>
              <div className="faq-detail-image">
                <img src="./images/ZUjk7qh.png" alt="" />
              </div>
            </FaqBoardItem>
            <FaqBoardItem>
              <div className="faq-detail-title">
                <h3>결제영수증은 어디에서 확인이 가능한가요?</h3>
              </div>
              <p>
                결제 즉시 강의 등록을 완료했다는 내용을 이메일로 보내드립니다.
              </p>
              <p>
                영수증(카드전표)는 Dashboard &gt; My Payment History &gt;
                Receipt 를 클릭하셔서 확인이 가능합니다.
              </p>
            </FaqBoardItem> */}
          </FaqBoardContainer>
        </FaqDetailBoard>
      </FaqDetailContainer>
    </>
  );
};

export default FaqDetail;
