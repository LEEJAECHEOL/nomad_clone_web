// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { coursesOneGetRequestAction } from "../../reducers/courses";

// const ClientCoursesDetail = ({ match }) => {
//   const courseId = match.params.id;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     console.log("유즈이펙트 발동?");
//     dispatch(coursesOneGetRequestAction(courseId));
//   }, []);
//   const { coursesItem } = useSelector((state) => state.courses);
//   console.log("코스상세데이터", coursesItem);
//   return (
//     <>
//       <h1>코스디테일 페이지</h1>
//     </>
//   );
// };

// export default ClientCoursesDetail;
