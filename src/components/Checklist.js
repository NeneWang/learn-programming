
import React, { Children } from 'react';
import CheckBox from "@site/src/components/CheckBox.js";


export default function CheckListAns({ checkList }) {

  let List = checkList.map(check => <CheckBox title={check} />)

  return (
    <div> 
      <CheckBox title="Item" />
      {checkBoxList}
    </div>
  );
}