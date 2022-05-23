
import React, { Children } from 'react';
import CheckBox from "@site/src/components/CheckBox.js";


export default function CheckList({ checkList }) {

  checkList = ["Test1", "Tes2"]
  answer = 1
  let List = checkList.map(check => <CheckBox title={check} />)

  return (
    <div> 
      <CheckBox title="Item" />
      {checkBoxList}
    </div>
  );
}