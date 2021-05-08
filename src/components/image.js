import React from "react";

const Image = (props) => {
  const { data } = props;
  return (
    <div classname="Image">
      <h3> it's {data.benefits}</h3>
    </div>
  );
};

export default Image;
