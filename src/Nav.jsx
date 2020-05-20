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
  ({ children, className, style, setListFocused }, ref) => {
    const [value, setValue] = useState("");

    const onKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        console.log(e.key);
        setListFocused(true);
      }

      // iff letter, focus back on searchbox
    };

    return (
      <div ref={ref} className={className} style={style} onKeyDown={onKeyDown}>
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
  const [listFocused, setListFocused] = useState(false);
  const txt = useRef(null);

  const items = ["red", "orange", "yellow", "green", "blue"];

  if (listFocused) {
    txt.current.focus();
    console.log("foo");
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
        {items.map((item, i) => {
          return (
            <Dropdown.Item
              key={item}
              className="menuItem"
              ref={i === 0 ? txt : null}
            >
              {item}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Nav;
