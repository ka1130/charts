import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="./"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

const CustomMenu = React.forwardRef(
  (
    {
      children,
      className,
      style,
      "aria-labelledby": labeledBy,
      listFocused,
      setListFocused,
    },
    ref
  ) => {
    const [value, setValue] = useState("");

    const onKeyDown = (e) => {
      console.log(e.key);
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        console.log("down");
        setListFocused(true);
      }
    };

    return (
      <div
        ref={ref}
        className={className}
        aria-labelledby={labeledBy}
        style={style}
        onKeyDown={onKeyDown}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

const Nav = () => {
  const items = ["red", "orange", "yellow", "green", "blue"];
  const [listFocused, setListFocused] = useState(false);
  const [focusedEl, setFocusedEl] = useState(0);

  const textInput = useRef();

  console.log("list focused: ", listFocused);

  if (listFocused) {
    // use ref to find element to focus?
    textInput.current.focus();
  }

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Custom toggle
      </Dropdown.Toggle>

      <Dropdown.Menu
        as={CustomMenu}
        listFocused={listFocused}
        setListFocused={setListFocused}
      >
        {items.map((item, i) => (
          <Dropdown.Item
            key={item}
            eventKey={i}
            className="menuItem"
            onFocus={() => console.log("I am focused")}
            ref={i === focusedEl ? textInput : null}
            // onClick={focusTextInput}
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Nav;
