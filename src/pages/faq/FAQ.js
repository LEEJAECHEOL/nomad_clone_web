import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import { PageHero } from "../../components/style";
import { faqGetRequestAction } from "../../reducers/faq";
import { FaqContainer } from "./style";

const FAQ = () => {
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(faqGetRequestAction(category));
    console.log("몇번실행되?");
  }, []);

  const { faqList } = useSelector((state) => state.faq);
  console.log("정보는? ", faqList);
  return (
    <>
      <AppLayout>
        <PageHero>
          <h1>FAQ</h1>
          <p>궁금한 것이 있다구요?</p>
        </PageHero>
        <FaqContainer>
          {faqList !== null
            ? faqList.map((list) => (
                <>
                  <div className="Faq-Item">
                    <h3>{list.title}</h3>
                    <div className="Faq-Item-list">
                      {list.faq !== null
                        ? list.faq.map((item) => (
                            <>
                              <Link to={`/faq/${item.id}`}>{item.title}</Link>
                            </>
                          ))
                        : null}
                    </div>
                  </div>
                </>
              ))
            : null}
        </FaqContainer>
      </AppLayout>
    </>
  );
};

export default FAQ;
