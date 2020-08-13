import React from "react";
import styled from "styled-components";
// import Pictures from "./image";

const Header = (props) => {
  const { data } = props;
  const StyledHeader = styled.h2`
    background-color: ${(props) => props.theme.headerColor};
    color: ${(props) => props.theme.white};
    padding: ${(props) => props.theme.smallPadding};
  `;
  return (
    <div className="Header">
      <StyledHeader>You're looking at {data.title}</StyledHeader>
    </div>
  );
};

export default Header;
// export { Header, Pictures };
