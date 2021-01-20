import React from "react";

const ItemSorter = ({labelOne,labelTwo,labelThree}) => {
  return (
    <>
      <select className="item-sorter">
        <option label={labelOne}>{labelOne}</option>
        <option label={labelTwo}>{labelTwo}</option>
        <option label={labelThree}>{labelThree}</option>
      </select>
    </>
  );
};

export default ItemSorter;
