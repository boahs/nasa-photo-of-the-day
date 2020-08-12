import React from "react";
// import Pictures from "./image";

const Header = (props) => {
  const { data } = props;
  return (
    <div className="Header">
      <h2>You're looking at {data.title}</h2>
    </div>
  );
};

export default Header;
// export { Header, Pictures };
