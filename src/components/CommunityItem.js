import { UpOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { CommunityBoardItem } from "../pages/community/style";
import { timeForToday } from "../util/Script";

const CommunityItem = ({ list }) => {
  return (
    <>
      <CommunityBoardItem size="large">
        <div className="Board-Fav">
          <button>
            <UpOutlined />
            <span>{list.count}</span>
          </button>
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
              <span> {list.user !== null ? list.user.name : null}</span>
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
          <img src={list.user.imageUrl} alt="" />
        </div>
      </CommunityBoardItem>
    </>
  );
};

export default CommunityItem;
