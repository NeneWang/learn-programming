
import React, { Children } from 'react';
import CheckBox from "@site/src/components/CheckBox.js";


export default function CheckListAns({ checkList }) {

  checkList = ["Test1", "Tes2"]
  const answer = 1
  let checkBoxList = checkList.map(check => <CheckBox title={check} />)

  return (
    <div> 
      {checkBoxList}
    </div>
  );
}