import React from "react";
import styled from "styled-components";

const Explain = (props) => {
  const { data } = props;
  // const style = { fontSize: "0.50em", color: "royalblue" };

  const StyledExplain = styled.div`
    color: ${(props) => props.theme.mainColor};
    font-size: ${(props) => props.theme.normalSize};
  `;

  const Hdimg = styled.h2`
    font-size: ${(props) => props.theme.smallSize};
    color: ${(props) => props.theme.secondaryColor};
    background-color: ${(props) => props.theme.highlightedText};
    &:hover {
      transform: ${(props) => props.theme.transformUp};
    }
  `;

  return (
    <StyledExplain>
      <div className="hdURL">
        <Hdimg>HD LINK: {data.hdurl}</Hdimg>
      </div>
      <h3>
        Taken on {data.date} by: {data.copyright}
      </h3>
      <p>{data.explanation}</p>
    </StyledExplain>
  );
};

export default Explain;
