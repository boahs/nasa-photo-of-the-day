import React from "react";

const Pictures = (props) => {
  const { data } = props;
  return (
    <div className="Picture">
      <img src={data.url} alt={data.title} />
    </div>
  );
};

export default Pictures;
