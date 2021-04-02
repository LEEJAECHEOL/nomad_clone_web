import React from "react";
import { CommunityReplyCard } from "./style";

const CommunityReplyItem = ({ list }) => {
  console.log("댓글데이터", list);
  return (
    <>
      <CommunityReplyCard>
        <div className="ReplyItemLeft">
          <button>0</button>
        </div>
        <div className="ReplyItemRight">
          <div className="ReplyItemRightHeader">
            <div className="ReplyItemRightUserInfo">
              <span>
                <img src={list.user.imageUrl} alt="" />
              </span>
              <span>{list.user.name}</span>
              <span>{list.createDate}</span>
            </div>
            <button>X</button>
          </div>
          <div className="ReplyItemRightContent">{list.content}</div>
        </div>
      </CommunityReplyCard>
    </>
  );
};

export default CommunityReplyItem;
