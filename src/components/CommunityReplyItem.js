import React from "react";
import { CommunityReplyCard } from "./style";

const CommunityReplyItem = ({ list }) => {
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
                <img src="http://localhost:3000/images/userImage.jpg" alt="" />
              </span>
              <span>유저아이디</span>
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
