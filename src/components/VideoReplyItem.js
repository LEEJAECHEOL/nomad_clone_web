import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VideoReplyCard } from "../pages/video/style";
import { videoReplyDeleteRequestAction } from "../reducers/video";
import { timeForToday } from "../util/Script";

const VideoReplyItem = ({ list }) => {
  const { principal } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClickVideoReplyDelte = useCallback((e) => {
    const id = e.target.id;
    dispatch(videoReplyDeleteRequestAction(id));
  }, []);

  return (
    <VideoReplyCard>
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
            <button onClick={onClickVideoReplyDelte} id={list.id}>
              X
            </button>
          )}
        </div>
        <div className="ReplyItemRightContent">{list.content}</div>
      </div>
    </VideoReplyCard>
  );
};

export default VideoReplyItem;
