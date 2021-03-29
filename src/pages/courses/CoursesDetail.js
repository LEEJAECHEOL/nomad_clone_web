import {
  ArrowRightOutlined,
  CheckCircleTwoTone,
  CheckOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppNoColLayout from "../../components/AppNoColLayout";
import { coursesOneGetRequestAction } from "../../reducers/courses";
import {
  ConcepConatiner,
  ConceptLayout,
  LevelDetailLayout,
  CourseInfomation,
  CoursesDetailLayout,
  SimpleInfo,
  PurchaseLayout,
} from "./style";

const CoursesDetail = ({ match }) => {
  const courseId = match.params.id;
  const dispatch = useDispatch();

  console.log(match);
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
              <h2>
                {coursesItem !== null ? coursesItem.videoInfo.count : null}개
              </h2>
              <p>동영상</p>
            </div>
            <div>
              <h2>
                {coursesItem !== null
                  ? coursesItem.videoInfo.totalMinute
                  : null}
                분
              </h2>
              <p>강의분량</p>
            </div>
            <div>
              <h2>{coursesItem !== null ? coursesItem.level : null}</h2>
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
                            <p>{list !== null ? list.content : ""}</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="simpleInfoBoxR">
                          <img
                            src={list !== null ? list.image.url : ""}
                            alt=""
                          />
                          <div>
                            <h3>{list !== null ? list.title : ""}</h3>
                            <p>{list !== null ? list.content : ""}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ))
              : null}
          </SimpleInfo>
        </CoursesDetailLayout>
        {/* 컨셉레이아웃 */}
        <ConceptLayout
          beforedisplay="block"
          background={
            coursesItem !== null ? coursesItem.backgroundColor : "#000"
          }
        >
          <ConcepConatiner>
            <h2 className="concepTitle">구현하는 기능과 배우는 컨셉</h2>
            <div className="concepVisual">
              <div className="concepLeft">
                {coursesItem !== null
                  ? coursesItem.concept.map((list) => (
                      <>
                        <div>
                          <h3>{list !== null ? list.content : null}</h3>
                          <p>
                            <CheckOutlined
                              style={{ fontSize: "16px", color: "#10b981" }}
                            />
                            Test Concept
                          </p>
                          <p>
                            <CheckOutlined
                              style={{ fontSize: "16px", color: "#10b981" }}
                            />
                            Test Concept
                          </p>
                          <p>
                            <CheckOutlined
                              style={{ fontSize: "16px", color: "#10b981" }}
                            />
                            Test Concept
                          </p>
                          <p>
                            <CheckOutlined
                              style={{ fontSize: "16px", color: "#10b981" }}
                            />
                            Test Concept
                          </p>
                          <p>
                            <CheckOutlined
                              style={{ fontSize: "16px", color: "#10b981" }}
                            />
                            Test Concept
                          </p>
                        </div>
                      </>
                    ))
                  : null}
              </div>
              <div className="concepRight">
                <div className="console">
                  <span></span>
                </div>
                <div className="consoleConcept">
                  <p>&#123;</p>
                  <h3>
                    "name"&nbsp;:&nbsp;
                    <span>
                      "{coursesItem !== null ? coursesItem.skill.name : null}"
                    </span>
                    <b>,</b>
                  </h3>
                  <h3>
                    "section "&nbsp;:&nbsp;
                    <span>
                      "{coursesItem !== null ? coursesItem.skill.section : null}
                      "
                    </span>
                    <b>,</b>
                  </h3>
                  <h3>
                    "package "&nbsp;:&nbsp;
                    <b>[</b>
                  </h3>

                  {coursesItem !== null ? (
                    <>
                      {coursesItem.skill !== null ? (
                        <>
                          {coursesItem.skill.package !== null
                            ? coursesItem.skill.package.map((list) => (
                                <>
                                  <h4>
                                    "<span>{list.content}</span>"
                                  </h4>
                                </>
                              ))
                            : null}
                        </>
                      ) : null}
                    </>
                  ) : null}
                  <b className="endB">]</b>
                  <p>&#125;</p>
                </div>
              </div>
            </div>
          </ConcepConatiner>
        </ConceptLayout>
        <LevelDetailLayout beforedisplay="block">
          <h2>이 정도 수준인 분들 드루와요</h2>
          {coursesItem !== null ? (
            <>
              {coursesItem.levelContent !== null
                ? coursesItem.levelContent.map((list) => (
                    <>
                      <p>
                        <span>{list.content}</span>
                      </p>
                    </>
                  ))
                : null}
            </>
          ) : null}
        </LevelDetailLayout>
        {/* 결과적으로, 이 수업 이후... */}
        <ConceptLayout
          beforedisplay="block"
          background={
            coursesItem !== null ? coursesItem.backgroundColor : "#000"
          }
        >
          <div className="afterLecture">
            <h2>결과적으로, 이 수업 이후...</h2>
            {coursesItem !== null ? (
              <>
                {coursesItem.lectureAfter !== null
                  ? coursesItem.lectureAfter.map((list) => (
                      <>
                        <p>
                          <CheckSquareOutlined
                            style={{ fontSize: "20px", color: "#fff" }}
                          />
                          <strong>{list.content}</strong>
                        </p>
                      </>
                    ))
                  : null}
              </>
            ) : null}
          </div>
        </ConceptLayout>
        <PurchaseLayout
          background={
            coursesItem !== null ? coursesItem.backgroundColor : "#000"
          }
        >
          <h2>Start Cloning Now!</h2>
          <h3>풀스택 로켓에 지금 올라타세요-!!</h3>
          <div className="purchaseBox">
            <div className="purchaseInfo">
              <h3>Lifetime Access</h3>
              <p>
                본인이 원하시는 시간에, 본인에게 맞는 속도와 스피드로 페이스를
                조정하여, 언제든지 다시 반복하여 들을 수 있는 온라인 수업입니다.
              </p>
              <div className="included">
                <span>WHAT'S INCLUDED</span>
                <div></div>
              </div>
              <div className="includedBox">
                <span>
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                  강의 평생소장
                </span>
                <span>
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                  니꼬쌤이 직접 질의응답
                </span>
                <span>
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                  100% 한글자막
                </span>
                <span>
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                  활발한 현직 개발자들의 슬랙 커뮤니티
                </span>
              </div>
            </div>
            <div className="purchasePrice">
              <h4>Pay once, own it forever</h4>
              <div className="price">
                <p>{coursesItem !== null ? coursesItem.price : null}원</p>
              </div>
              <Link to={`/purchase/${courseId}`}>
                Go to Checkout <ArrowRightOutlined />
              </Link>
            </div>
          </div>
        </PurchaseLayout>
      </AppNoColLayout>
    </>
  );
};

export default CoursesDetail;
