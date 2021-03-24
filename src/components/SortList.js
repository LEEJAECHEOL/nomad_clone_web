import React, { memo, useCallback } from "react";
import { sortableContainer } from "react-sortable-hoc";
import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import SortListTitle from "./SortListTitle";
import SortListItem from "./SortListItem";
import { videoContentsItemListSortAction } from "../reducers/admin/video";
const SortableContainer = sortableContainer(({ children }) => {
  return <List>{children}</List>;
});
const SortList = memo(() => {
  const dispatch = useDispatch();

  const { videoContent } = useSelector((state) => state.adminVideo);
  const onSortEnd = useCallback(
    ({ oldIndex, newIndex, collection }) => {
      dispatch(
        videoContentsItemListSortAction({ oldIndex, newIndex, collection })
      );
    },
    [dispatch]
  );

  return (
    <>
      <SortableContainer onSortEnd={onSortEnd} useDragHandle>
        {videoContent.contents.map((title, index) => (
          <React.Fragment key={index}>
            <SortListTitle key={`title ${index}`} index={index} text={title} />
            {videoContent.contentList[index].map((list, itemIndex) => (
              <SortListItem
                key={`list ${itemIndex}`}
                collection={index}
                index={itemIndex}
              />
            ))}
          </React.Fragment>
        ))}
      </SortableContainer>
    </>
  );
});

export default SortList;
