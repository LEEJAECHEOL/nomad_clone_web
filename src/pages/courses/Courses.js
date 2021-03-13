import React from "react";
import Course from "../../components/Course";
import { PageHero } from "../../components/style";
import { CoursesBox, CoursesFilter } from "./style";

const Courses = () => {
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
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
      </CoursesBox>
    </>
  );
};

export default Courses;
