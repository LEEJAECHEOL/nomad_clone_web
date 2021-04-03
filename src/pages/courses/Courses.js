import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AppLayout from "../../components/AppLayout";
import Course from "../../components/Course";
import { PageHero } from "../../components/style";
import { techGetRequestAction } from "../../reducers/admin/tech";
import { coursesGetRequestAction } from "../../reducers/courses";
import {
  BadgeSelector,
  CoursesBox,
  CoursesFilter,
  FilterButton,
} from "./style";

const Courses = () => {
  const dispatch = useDispatch();
  const [level, setLevel] = useState("");
  const [isFree, setIsFree] = useState("");
  const [tech, setTech] = useState("");

  useEffect(() => {
    dispatch(coursesGetRequestAction());
    dispatch(techGetRequestAction());
  }, []);

  const { techList } = useSelector((state) => state.admintech);
  const { coursesList } = useSelector((state) => state.courses);

  const onClickLevel = useCallback((event) => {
    setLevel(event.target.innerText);
  }, []);
  const onClickLevelCancel = useCallback(() => {
    setLevel("");
  }, []);
  const onClickIsFree = useCallback((event) => {
    if (event.target.innerText === "Free") {
      setIsFree(true);
    } else {
      setIsFree(false);
    }
  }, []);
  const onClickIsFreeCancel = useCallback(() => {
    setIsFree("");
  }, []);

  return (
    <>
      <AppLayout>
        <PageHero>
          <h1>All Courses</h1>
          <p>초급부터 고급까지! 니꼬쌤과 함께 풀스택으로 성장하세요!</p>
        </PageHero>
        <CoursesFilter>
          <div className="Filter-left">
            <div>
              <h3>Filter by Level</h3>
              <p>
                <FilterButton
                  onClick={onClickLevel}
                  color={level === "초급" ? "#D1FAE5" : "#fff"}
                >
                  초급
                </FilterButton>
                <FilterButton
                  onClick={onClickLevel}
                  color={level === "중급" ? "#FEF9C3" : "#fff"}
                >
                  중급
                </FilterButton>
                <FilterButton
                  onClick={onClickLevel}
                  color={level === "고급" ? "#DBEAFE" : "#fff"}
                >
                  고급
                </FilterButton>
                {level !== "" ? (
                  <Button
                    className="cancel"
                    icon={<CloseOutlined />}
                    onClick={onClickLevelCancel}
                  ></Button>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div>
              <h3>Filter by Price</h3>
              <p>
                <FilterButton
                  onClick={onClickIsFree}
                  color={isFree === true ? "#D1FAE5" : "#fff"}
                >
                  Free
                </FilterButton>
                <FilterButton
                  onClick={onClickIsFree}
                  color={isFree === false ? "#DBEAFE" : "#fff"}
                >
                  Paid
                </FilterButton>
                {isFree !== "" ? (
                  <Button
                    className="cancel"
                    icon={<CloseOutlined />}
                    onClick={onClickIsFreeCancel}
                  ></Button>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
          <div className="Filter-right">
            <h3>Filter by Tech</h3>
            <BadgeSelector>
              {techList !== null
                ? techList.map((list) => (
                    <>
                      <Button>
                        <span>
                          <img
                            src={list.file !== null ? list.file.fileUrl : null}
                            alt=""
                          />
                        </span>
                      </Button>
                    </>
                  ))
                : null}
            </BadgeSelector>
          </div>
        </CoursesFilter>
        <CoursesBox>
          {coursesList !== null
            ? coursesList.map((list) => (
                <>
                  <Course list={list} />
                </>
              ))
            : null}
        </CoursesBox>
      </AppLayout>
    </>
  );
};

export default Courses;
