// import { Card, Col, Row } from "antd";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import AppLayout from "../../../components/AppLayout";
// import { faqGetRequestAction } from "../../../reducers/faq";
// import { AdminFaqContainer, FaqListItem } from "./style";

// const AdminFaqList = () => {
//   const [category, setCategory] = useState("");

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(faqGetRequestAction(category));
//     console.log("몇번실행되?");
//   }, []);

//   const { faqList } = useSelector((state) => state.faq);
//   console.log("정보는??? ", faqList);

//   return (
//     <>
//       <AppLayout>
//         <AdminFaqContainer>
//           <div className="site-card-wrapper">
//             <Row gutter={16}>
//               {faqList !== null
//                 ? faqList.map((list) => (
//                     <>
//                       <FaqListItem span={8}>
//                         <Link to={`/adminFaqUpdate/${list.id}`}>
//                           <Card title={list.faqCategory.title} bordered={false}>
//                             {list.title}
//                           </Card>
//                         </Link>
//                       </FaqListItem>
//                     </>
//                   ))
//                 : null}
//             </Row>
//           </div>
//         </AdminFaqContainer>
//       </AppLayout>
//     </>
//   );
// };

// export default AdminFaqList;
