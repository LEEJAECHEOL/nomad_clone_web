import {
  ArrowRightOutlined,
  CheckCircleTwoTone,
  CheckOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import { Collapse, List } from "antd";
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
  CurriculumLayout,
  FaqLayout,
} from "./style";
const { Panel } = Collapse;
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
                <div>
                  <h3>Concept</h3>
                  {coursesItem !== null
                    ? coursesItem.concept.map((list) => (
                        <>
                          <p>
                            <CheckOutlined
                              style={{ fontSize: "16px", color: "#10b981" }}
                            />
                            {list !== null ? list.content : null}
                          </p>
                        </>
                      ))
                    : null}
                </div>
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
        <CurriculumLayout beforedisplay="block">
          <div className="afterLecture">
            <h2>Course Curriculum</h2>
            {coursesItem !== null ? (
              <>
                {coursesItem.video !== null
                  ? coursesItem.video.contents.map((list, index) => (
                      <>
                        <List
                          size="large"
                          header={`#${index} ${list.title}`}
                          bordered
                        >
                          {list.list.map((item, itemIndex) => (
                            <>
                              <List.Item>
                                {`${itemIndex}. ${item.title}`}
                              </List.Item>
                            </>
                          ))}
                        </List>
                      </>
                    ))
                  : null}
              </>
            ) : null}
          </div>
        </CurriculumLayout>
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
              <Link>
                Go to Checkout <ArrowRightOutlined />
              </Link>
            </div>
          </div>
        </PurchaseLayout>
        <FaqLayout beforedisplay="block">
          <div className="afterLecture">
            <h2>Frequently asked questions</h2>
            <Collapse ghost>
              <Panel header="수업은 언제 시작하고 종료되나요?" key="1">
                <p>
                  수강신청을 하신 후에 언제든이요! 이 수업은 본인이 원하시는
                  시간에, 본인에게 맞는 속도와 스피드로 페이스를 조정하여,
                  언제든지 다시 반복하여 들을 수 있는 온라인 수업입니다.
                </p>
              </Panel>
              <Panel header="수업은 언제까지 들을 수 있나요?" key="2">
                <p>
                  무제한이요! 강의 영상의 경우 무제한으로, 언제든지, 어디서든
                  로그인하셔서 반복 재생, 수강하실 수 있습니다.
                </p>
              </Panel>
              <Panel
                header="저에게 이 수업이 너무 어렵지 않을까요? 난이도가 어느정도 인가요?"
                key="3"
              >
                <p>
                  수강신청 하시기 전에 Community에서 다른 수강생이 한 후기를
                  확인하여 수업 순서 및 난이도 체크를 하시기 바랍니다. 또한 무료
                  맛보기 수업인 'Free Preview' 를 적극 활용해주세요!
                </p>
              </Panel>
              <Panel header="결제는 어떻게 하나요?" key="4">
                <p>
                  각 강의별 책정된 금액에 따라 결제합니다. 총 금액에 따라 월
                  할부 결제를 하실 수 있습니다. 국내 카드 (KRW 원화) 및 해외
                  카드 (USD) 로 결제 가능합니다.
                </p>
              </Panel>
              <Panel header="환불 되나요?" key="5">
                <p>
                  구매일로부터 7일 이내 및 5강 미만 수강 시에는 100% 결제취소가
                  가능합니다. 7일 이후에는 일부 차감되어 환불됩니다. 자세한
                  내용은 환불 정책 을 참고해주세요.
                </p>
              </Panel>
              <Panel header="할인 쿠폰은 어디서 얻나요?" key="6">
                <p>
                  노마드 코더는 정직하고 명확한 정가제를 준수합니다. 무분별한
                  할인과 쿠폰 남발, 환급 등으로 수강생들의 혼란을 더하지
                  않습니다.
                </p>
              </Panel>
              <Panel header="그 외 궁금한게 있어요!" key="7">
                <p>기타 궁금한 사항은 라이브 채팅으로 편하게 연락주세요!</p>
              </Panel>
            </Collapse>
          </div>
        </FaqLayout>
      </AppNoColLayout>
    </>
  );
};

export default CoursesDetail;
