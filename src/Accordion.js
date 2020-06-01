import React, { useState } from "react";
import "./Accordion.css";

const initialData = [
  {
    title: "Row 1",
    user: "John Smith",
    link: "http://google.com",
    comment:
      "In an effort to work with the language instead of imposing an artificial structure on top of it,functional programming has been growing in popularity in recent years.",
  },
  {
    title: "Row 2",
    user: "Allan Watts",
    link: "http://awatts.com",
    comment:
      "Renders with line-breaks (Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary). Like this",
  },
  {
    title: "Row 3",
    user: "Ellen Doe",
    link: "http://edoe.com",
    comment:
      "You could use CSS property white-space: pre. I think this is the easiest way to handle this.",
  },
];

const Row = ({ el, toggle, i }) => (
  <div>
    <h3 className="toggle" onClick={() => toggle(i)}>
      {el.title}
    </h3>
    <div className={`${el.open ? "open" : ""} content`}>
      <div>{el.user}</div>
      <div>{el.link}</div>
      <div>{el.comment}</div>
    </div>
  </div>
);

const Accordion = () => {
  const accordionData = initialData.map((el) => ({ ...el, open: false }));
  const [data, setData] = useState(accordionData);

  // const toggle = (index) => {
  //   setData(
  //     data.map((el, i) => {
  //       if (i === index) {
  //         el.open = !el.open;
  //       } else {
  //         el.open = false;
  //       }

  //       return el;
  //     })
  //   );
  // };
  const toggle = (index) => {
    console.log("toogle: ", index);
    const toggledData = data.map((elem, ind) => ({
      ...elem,
      open: ind === index ? (elem.open = !elem.open) : false,
    }));
    setData(toggledData);
  };

  return (
    <div>
      {data.map((el, i) => (
        <Row el={el} i={i} toggle={toggle} key={i} />
      ))}
    </div>
  );
};

export default Accordion;
