import { Button, Menu } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CommunityItem from "../../components/CommunityItem";
import { PageHero } from "../../components/style";
import {
  communityCategoryGetRequestAction,
  communityGetRequestAction,
  communityNewGetRequestAction,
} from "../../reducers/community";
import {
  CommunityBoard,
  CommunityCategory,
  CommunityContainer,
  CommunityWriteButton,
  CommunityWrite,
  CommunityBoardContainer,
  SortMenu,
} from "./style";
import {
  LineChartOutlined,
  SearchOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import AppLayout from "../../components/AppLayout";
import {
  categoryGetRequestAction,
  categoryPostRequestAction,
} from "../../reducers/category";
import CategoryBtn from "../../components/AdminCategoryBtn";

const Community = () => {
  const { principal } = useSelector((state) => state.user);
  console.log("프린시퍼", principal);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("# all");
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    dispatch(communityGetRequestAction());
    dispatch(categoryGetRequestAction());
  }, []);

  const { communityList } = useSelector((state) => state.community);
  const { categoryList, categoryPostDone, categoryPostLoading } = useSelector(
    (state) => state.category
  );

  const onClickCategory = useCallback(
    (e) => {
      setTitle(e.domEvent.target.textContent);
      setCategoryId(e.key);
      dispatch(communityCategoryGetRequestAction(e.key));
      console.log(categoryId);
    },
    [categoryId]
  );

  const onClickSort = useCallback(({ key }) => {
    if (key === "new") {
      dispatch(communityNewGetRequestAction(categoryId));
    }
    if (key === "all") {
      dispatch(communityGetRequestAction());
    }
  }, []);
  return (
    <>
      <AppLayout>
        <PageHero>
          <h1>Community</h1>
          <p>개발자 99% 커뮤니티에서 수다 떨어요!</p>
          <p>{title}</p>
        </PageHero>

        <CommunityContainer justify="center">
          {/* 카테고리 */}
          <CommunityCategory span={5}>
            <h3>카테고리</h3>
            <Menu mode="vertical" defaultSelectedKeys={["0"]}>
              <Menu.Item
                key="all"
                defaultSelectedKeys={["all"]}
                onClick={onClickSort}
              >
                # all
              </Menu.Item>
              {categoryList.map((list) => (
                <>
                  <Menu.Item key={list.id} onClick={onClickCategory}>
                    {"# " + list.title}
                  </Menu.Item>
                </>
              ))}
            </Menu>
            <CategoryBtn
              action={categoryPostRequestAction}
              done={categoryPostDone}
              loading={categoryPostLoading}
            />
          </CommunityCategory>
          {/* 중앙 Board */}
          <CommunityBoard span={14}>
            <div className="Community-Filter">
              <div>
                <b>Sort by: </b>
                <SortMenu mode="horizontal" defaultSelectedKeys={["new"]}>
                  <Menu.Item
                    key={"popular"}
                    icon={<LineChartOutlined />}
                    onClick={onClickSort}
                  >
                    Popular
                  </Menu.Item>
                  <Menu.Item
                    key={"new"}
                    icon={<ThunderboltOutlined />}
                    onClick={onClickSort}
                  >
                    New
                  </Menu.Item>
                </SortMenu>
              </div>
              <div>
                <Button size="small" type="text" icon={<SearchOutlined />}>
                  Search
                </Button>
              </div>
            </div>
            <CommunityBoardContainer>
              {communityList.map((list) => (
                <>
                  <CommunityItem key={"list-" + list.id} list={list} />
                </>
              ))}
            </CommunityBoardContainer>
          </CommunityBoard>
          {/* 글쓰기 버튼 */}
          <CommunityWrite span={5}>
            <CommunityWriteButton type="primary">
              <Link to="/write">글쓰기</Link>
            </CommunityWriteButton>
          </CommunityWrite>
        </CommunityContainer>
      </AppLayout>
    </>
  );
};

export default Community;
