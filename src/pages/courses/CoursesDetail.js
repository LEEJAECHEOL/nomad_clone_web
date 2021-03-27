import { Card } from "antd";
import { number } from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppNoColLayout from "../../components/AppNoColLayout";
import { coursesOneGetRequestAction } from "../../reducers/courses";
import { ColorLayout } from "../admin/courses/style";
import { CourseInfomation, CoursesDetailLayout, SimpleInfo } from "./style";

const CoursesDetail = ({ match }) => {
  const courseId = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("유즈이펙트 발동?", courseId);
    dispatch(coursesOneGetRequestAction(courseId));
  }, []);

  const { coursesItem } = useSelector((state) => state.courses);

  console.log("코스상세데이터", coursesItem);
  return (
    <>
      <AppNoColLayout>
        <CoursesDetailLayout
          background={
            coursesItem !== null ? coursesItem.backgroundColor : "#000"
          }
        >
          <div className="mainImage">
            <img
              src={coursesItem !== null ? coursesItem.mainImage.url : ""}
              alt=""
            />
          </div>
          <div className="titleContainer">
            <h1>{coursesItem !== null ? coursesItem.title : ""}</h1>
            <h2>{coursesItem !== null ? coursesItem.subTitle : ""}</h2>
            <h3>{coursesItem !== null ? coursesItem.level : ""}</h3>
          </div>
        </CoursesDetailLayout>
        <CoursesDetailLayout beforedisplay="block">
          <div className="badgeContainer">
            {coursesItem !== null
              ? coursesItem.simpleImage.map((list) => (
                  <>
                    <img src={list !== null ? list.url : ""} alt="" />
                  </>
                ))
              : null}
          </div>
          <CourseInfomation>
            <div>
              <h2>232개</h2>
              <p>동영상</p>
            </div>
            <div>
              <h2>2119분</h2>
              <p>강의분량</p>
            </div>
            <div>
              <h2>중급</h2>
              <p>레벨</p>
            </div>
          </CourseInfomation>

          <SimpleInfo>
            {coursesItem !== null
              ? coursesItem.simpleInfo.map((list) => (
                  <>
                    {list.reverse !== true ? (
                      <>
                        <div className="simpleInfoBox">
                          <img
                            src={list !== null ? list.image.url : ""}
                            alt=""
                          />
                          <div>
                            <h3>{list !== null ? list.title : ""}</h3>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="simpleInfoBox">
                          <div>
                            <h3>{list !== null ? list.title : ""}</h3>
                          </div>
                          <img
                            src={list !== null ? list.image.url : ""}
                            alt=""
                          />
                        </div>
                      </>
                    )}
                  </>
                ))
              : null}
          </SimpleInfo>
        </CoursesDetailLayout>
        <ColorLayout
          beforedisplay="block"
          paddingbottom={50}
          background={
            coursesItem !== null ? coursesItem.backgroundColor : "#000"
          }
        >
          <p>test</p>
        </ColorLayout>
      </AppNoColLayout>
    </>
  );
};

export default CoursesDetail;
