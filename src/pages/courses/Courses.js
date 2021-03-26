import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Course from "../../components/Course";
import { PageHero } from "../../components/style";
import { coursesGetRequestAction } from "../../reducers/courses";
import { CoursesBox, CoursesFilter } from "./style";

const Courses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coursesGetRequestAction());
  }, []);

  const { coursesList } = useSelector((state) => state.courses);
  console.log("코스데이터는?", coursesList);
  return (
    <>
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
          <div className="Badges">
            <span>
              <img src="./images/js.png" alt="" />
            </span>
            <span>
              <img src="./images/js.png" alt="" />
            </span>
            <span>
              <img src="./images/js.png" alt="" />
            </span>
            <span>
              <img src="./images/js.png" alt="" />
            </span>
            <span>
              <img src="./images/js.png" alt="" />
            </span>
            <span>
              <img src="./images/js.png" alt="" />
            </span>
            <span>
              <img src="./images/js.png" alt="" />
            </span>
            <span>
              <img src="./images/js.png" alt="" />
            </span>
            <span>
              <img src="./images/js.png" alt="" />
            </span>
            <span>
              <img src="./images/js.png" alt="" />
            </span>
            <span>
              <img src="./images/js.png" alt="" />
            </span>
            <span>
              <img src="./images/js.png" alt="" />
            </span>
            <span>
              <img src="./images/js.png" alt="" />
            </span>
          </div>
        </div>
      </CoursesFilter>
      <CoursesBox>
        {/* {coursesList !== null
          ? coursesList.map((list) => (
              <>
                <Course list={list} />
              </>
            ))
          : null} */}
      </CoursesBox>
    </>
  );
};

export default Courses;
