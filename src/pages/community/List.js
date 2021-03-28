import { Button, Menu } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CommunityItem from "../../components/CommunityItem";
import { PageHero } from "../../components/style";
import {
  communityCategoryGetRequestAction,
  communityGetRequestAction,
  communityPopularGetRequestAction,
  communityNewGetRequestAction,
} from "../../reducers/community";
import {
  CommunityBoard,
  CommunityCategory,
  CommunityContainer,
  CommunityWriteButton,
  CommunityWrite,
  CommunityBoardContainer,
} from "./style";
import {
  LineChartOutlined,
  SearchOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import AppLayout from "../../components/AppLayout";
import { categoryGetRequestAction } from "../../reducers/category";

const Community = () => {
  // 셀렉트기능. 리듀서 상태값 가져옴.
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(communityGetRequestAction());
    dispatch(categoryGetRequestAction());
  }, []);

  const { communityList } = useSelector((state) => state.community);
  const { categoryList } = useSelector((state) => state.category);

  const onClickCategory = useCallback(({ key }) => {
    if (key === "all") {
      dispatch(communityGetRequestAction());
      return;
    } else if (key === "popular") {
      dispatch(communityPopularGetRequestAction());
      return;
    } else if (key === "new") {
      dispatch(communityNewGetRequestAction());
      return;
    }

    console.log(key);
    dispatch(communityCategoryGetRequestAction(key));
  }, []);
  return (
    <>
      <AppLayout>
        <PageHero>
          <h1>Community</h1>
          <p>개발자 99% 커뮤니티에서 수다 떨어요!</p>
        </PageHero>

        <CommunityContainer justify="center">
          {/* 카테고리 */}
          <CommunityCategory span={5}>
            <h3>카테고리</h3>
            <Menu mode="vertical">
              <Menu.Item key={"all"} onClick={onClickCategory}>
                all
              </Menu.Item>
              {categoryList !== null
                ? categoryList.map((list) => (
                    <>
                      <Menu.Item key={list.id} onClick={onClickCategory}>
                        {list.title}
                      </Menu.Item>
                    </>
                  ))
                : null}
            </Menu>
          </CommunityCategory>
          {/* 중앙 Board */}
          <CommunityBoard span={14}>
            <div className="Community-Filter">
              <div>
                <b>Sort by: </b>
                <Menu mode="horizontal">
                  <Menu.Item
                    key={"popular"}
                    onClick={onClickCategory}
                    icon={<LineChartOutlined />}
                  >
                    Popular
                  </Menu.Item>
                  <Menu.Item
                    key={"new"}
                    onClick={onClickCategory}
                    icon={<ThunderboltOutlined />}
                  >
                    New
                  </Menu.Item>
                </Menu>
              </div>
              <div>
                <Button size="small" type="text" icon={<SearchOutlined />}>
                  Search
                </Button>
              </div>
            </div>
            <CommunityBoardContainer>
              {communityList !== null
                ? communityList.map((list) => (
                    <>
                      <CommunityItem key={"list-" + list.id} list={list} />
                    </>
                  ))
                : null}
            </CommunityBoardContainer>
          </CommunityBoard>
          {/* 글쓰기 버튼 */}
          <CommunityWrite span={5}>
            <CommunityWriteButton type="primary" size={"small"}>
              <Link to="/write">글쓰기</Link>
            </CommunityWriteButton>
          </CommunityWrite>
        </CommunityContainer>
      </AppLayout>
    </>
  );
};

export default Community;
