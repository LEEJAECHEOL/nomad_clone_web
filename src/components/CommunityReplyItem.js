import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replyDeleteRequestAction } from "../reducers/community";
import { timeForToday } from "../util/Script";
import { CommunityReplyCard } from "./style";

const CommunityReplyItem = ({ list }) => {
  const { principal } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClickReplyDelte = useCallback((e) => {
    const id = e.target.id;
    dispatch(replyDeleteRequestAction(id));
  }, []);
  return (
    <>
      <CommunityReplyCard>
        <div className="ReplyItemRight">
          <div className="ReplyItemRightHeader">
            <div className="ReplyItemRightUserInfo">
              <span>
                <img src={list.user.imageUrl} alt="" />
              </span>
              <span>{list.user.name}</span>
              <span>ㅣ {timeForToday(list.createDate)}</span>
            </div>
            {list.user.id !== principal.id ? null : (
              <button onClick={onClickReplyDelte} id={list.id}>
                X
              </button>
            )}
          </div>
          <div className="ReplyItemRightContent">{list.content}</div>
        </div>
      </CommunityReplyCard>
    </>
  );
};

export default CommunityReplyItem;
