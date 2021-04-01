import { UpOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CommunityBoardItem } from "../pages/community/style";
import { communityLikePostRequestAction } from "../reducers/community";
import { timeForToday } from "../util/Script";
import { CommunityLikeButton } from "./style";

const CommunityItem = ({ list }) => {
  const dispatch = useDispatch();
  console.log("리스트정보", list);

  const onClickLikes = useCallback((e) => {
    const data = e.key;
    console.log(data);
    dispatch(communityLikePostRequestAction(data));
  }, []);
  return (
    <>
      <CommunityBoardItem size="large">
        <div className="Board-Fav">
          <CommunityLikeButton>
            <Menu.Item
              onClick={onClickLikes}
              key={list.id}
              icon={<UpOutlined />}
            >
              <span>{list.likes !== null ? list.likes.length : 0}</span>
            </Menu.Item>
          </CommunityLikeButton>
        </div>
        <div className="Board-Body">
          <Link to={`/communityDetail/${list.id}`}>
            <div className="Board-Body-Title">{list.title}</div>
          </Link>
          <div className="Board-Body-Info">
            <div className="Info-Tag">
              in &nbsp;
              <span>#{list.category.title}</span>
            </div>
            <div className="Info-Name">
              by
              <Link
                to={`/dashboard/${list.user !== null ? list.user.id : null}`}
              >
                <span> {list.user !== null ? list.user.name : null}</span>
              </Link>
            </div>
            <div className="Info-Date">
              &#8226;
              <span>{timeForToday(list.createDate)}</span>
            </div>
            <div className="Info-Reply">
              &#8226; &nbsp;
              <span>💬 </span>
              <b>{list.replys.length}</b>
            </div>
          </div>
        </div>
        <div className="Board-UserImg">
          <Link to={`/dashboard/${list.user !== null ? list.user.id : null}`}>
            <img src={list.user.imageUrl} alt="" />
          </Link>
        </div>
      </CommunityBoardItem>
    </>
  );
};

export default CommunityItem;
