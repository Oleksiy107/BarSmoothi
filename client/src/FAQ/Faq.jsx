import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Accordion = () => {
  const items = [
    {
      question: "Question #1",
      content:
        "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
    {
      question: "Question #2",
      content:
        "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
    {
      question: "Question #3",
      content:
        "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
  ];

  return (
    <div className="accordion w-100" id="basicAccordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          content={item.content}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({ question, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <button
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
          type="button"
        >
          {question}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
        <div className="accordion-body">
          <strong>{content}</strong>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
