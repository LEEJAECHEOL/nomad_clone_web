import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Button, Menu } from "antd";
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
import AppLayout from "../../components/AppLayout";
import { Link } from "react-router-dom";

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

  const { principal } = useSelector((state) => state.user);

  useEffect(() => {
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

  return (
    <>
      <AppLayout>
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

                {faqItem !== null
                  ? ReactHtmlParser(faqItem.content)
                  : "Content"}
              </FaqBoardItem>
            </FaqBoardContainer>
            {principal !== null && principal.roles === "ROLE_ADMIN" && (
              <Button>
                <Link to={`/admin/faq/update/${data}`}>수정하기</Link>
              </Button>
            )}
          </FaqDetailBoard>
        </FaqDetailContainer>
      </AppLayout>
    </>
  );
};

export default FaqDetail;
