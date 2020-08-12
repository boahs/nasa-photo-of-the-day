import React from "react";

const Explain = (props) => {
  const { data } = props;
  const style = { fontSize: "0.50em", color: "royalblue" };

  return (
    <div className="explaination">
      <div style={style} className="hdURL">
        <h2>HD LINK: {data.hdurl}</h2>
      </div>
      <h3>
        Taken on {data.date} by: {data.copyright}
      </h3>
      <p>{data.explanation}</p>
    </div>
  );
};

export default Explain;
