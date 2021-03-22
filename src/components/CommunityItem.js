import React from "react";
import { Link } from "react-router-dom";
import { CommunityBoardItem } from "../pages/community/style";

const CommunityItem = ({ list }) => {
  return (
    <>
      <Link to={`/communityDetail/${list.id}`}>
        <CommunityBoardItem size="large">
          <div className="Board-Fav">
            <button>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-up"
                class="svg-inline--fa fa-angle-up fa-w-10 fa-lg opacity-50"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
                ></path>
              </svg>
              <span>{list.count}</span>
            </button>
          </div>
          <div className="Board-Body">
            <div className="Board-Body-Title">{list.title}</div>
            <div className="Board-Body-Info">
              <div className="Info-Tag">
                in &nbsp;
                <span>#{list.category.title}</span>
              </div>
              <div className="Info-Name">
                by &nbsp;
                <span> {list.user !== null ? list.user.name : null}</span>
              </div>
              <div className="Info-Date">
                &#8226; &nbsp;
                <span>{list.createDate}</span>
              </div>
              <div className="Info-Reply">
                &#8226; &nbsp;
                <span>💬</span>
                <b>{list.replys.length}</b>
              </div>
            </div>
          </div>
          <div className="Board-UserImg">
            <img src="./images/userImage.jpg" alt="" />
          </div>
        </CommunityBoardItem>
      </Link>
    </>
  );
};

export default CommunityItem;
