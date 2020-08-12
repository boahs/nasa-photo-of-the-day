import React from "react";
// import Header from "./header";

const Pictures = (props) => {
  const { data } = props;
  return (
    <div className="Picture">
      <img src={data.url} alt={data.title} />
    </div>
  );
};

export default Pictures;

// export { Pictures, Header };
