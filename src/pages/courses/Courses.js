import { Menu } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../components/AppLayout";
import Course from "../../components/Course";
import { PageHero } from "../../components/style";
import { techGetRequestAction } from "../../reducers/admin/tech";
import { coursesGetRequestAction } from "../../reducers/courses";
import { BadgeSelector, CoursesBox, CoursesFilter } from "./style";

const Courses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coursesGetRequestAction());
    dispatch(techGetRequestAction());
  }, []);
  const { techList } = useSelector((state) => state.admintech);
  const { coursesList } = useSelector((state) => state.courses);
  console.log(techList);
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
                <span>초급</span> <span>중급</span> <span>고급</span>
              </p>
            </div>
            <div>
              <h3>Filter by Price</h3>
              <p>
                <span>Free</span> <span>Paid</span>
              </p>
            </div>
          </div>
          <div className="Filter-right">
            <h3>Filter by Tech</h3>
            <BadgeSelector>
              {techList !== null
                ? techList.map((list) => (
                    <>
                      <Menu.Item>
                        <span>
                          <img
                            src={list.file !== null ? list.file.fileUrl : null}
                            alt=""
                          />
                        </span>
                      </Menu.Item>
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
