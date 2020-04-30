import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className='tc'>
      <div className='white f3'>{`${name} , your entries are ...`}</div>
      <div className='white f1'>{entries}</div>
    </div>
  );
};
export default Rank;
