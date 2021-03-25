import { Button, Menu, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CommunityItem from "../../components/CommunityItem";
import { PageHero } from "../../components/style";
import { communityGetRequestAction } from "../../reducers/community";
import {
  CommunityBoard,
  CommunityCategory,
  CommunityContainer,
  CommunityWriteButton,
  CommunityWrite,
  CommunityBoardContainer,
  SkeltonCard,
} from "./style";
import { LineChartOutlined, SearchOutlined } from "@ant-design/icons";

const Community = () => {
  const [category, setCategory] = useState("");
  // 셀렉트기능. 리듀서 상태값 가져옴.
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(communityGetRequestAction(category));
  }, []);

  const { communityList, communityGetLoading } = useSelector(
    (state) => state.community
  );
  return (
    <>
      <PageHero>
        <h1>Community</h1>
        <p>개발자 99% 커뮤니티에서 수다 떨어요!</p>
      </PageHero>

      <CommunityContainer justify="center">
        {/* 카테고리 */}
        <CommunityCategory span={5}>
          <h3>카테고리</h3>
          <Menu mode="vertical">
            <Menu.Item>
              <Link>
                <span>#</span>all
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link>
                <span>#</span>to-do-list
              </Link>
            </Menu.Item>
          </Menu>
        </CommunityCategory>
        {/* 중앙 Board */}
        <CommunityBoard span={14}>
          <div className="Community-Filter">
            <div>
              <b>Sort by: </b>
              <Button size="small" type="text" icon={<LineChartOutlined />}>
                Popular
              </Button>
              <Button size="small" type="text" icon={<LineChartOutlined />}>
                Popular
              </Button>
            </div>
            <div>
              <Button size="small" type="text" icon={<SearchOutlined />}>
                Search
              </Button>
            </div>
          </div>
          <CommunityBoardContainer>
            {communityGetLoading ? (
              <>
                <SkeltonCard key="skel-1">
                  <Skeleton active avatar paragraph={{ rows: 1 }} />
                </SkeltonCard>
                <SkeltonCard key="skel-2">
                  <Skeleton active avatar paragraph={{ rows: 1 }} />
                </SkeltonCard>
                <SkeltonCard key="skel-3">
                  <Skeleton active avatar paragraph={{ rows: 1 }} />
                </SkeltonCard>
              </>
            ) : communityList !== null ? (
              communityList.map((list) => (
                <>
                  <CommunityItem key={"list-" + list.id} list={list} />
                </>
              ))
            ) : null}
          </CommunityBoardContainer>
        </CommunityBoard>
        {/* 글쓰기 버튼 */}
        <CommunityWrite span={5}>
          <CommunityWriteButton type="primary" size={"small"}>
            <Link to="/write">글쓰기</Link>
          </CommunityWriteButton>
        </CommunityWrite>
      </CommunityContainer>
    </>
  );
};

export default Community;
