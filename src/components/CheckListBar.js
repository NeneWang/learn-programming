
import React, { useState } from 'react';
import CheckBoxBar from "@site/components/CheckboxBar.js";


export default function CheckListBar({ checkList }) {

  const [completedCount, setCompletedCount] = useState(0);

  const updateTotal = (updateCount) => {
    setCompletedCount(updateCount > 0 ? completedCount + 1 : completedCount - 1)
  };

  const total = checkList.length

  let checkBoxList = checkList.map(check => <CheckBoxBar title={check} updateCount={updateTotal} />)

  return (
    <div>
      Completed: {completedCount} / {total} {completedCount >= total ?  "🎉" : ""}
      {checkBoxList}
    </div>
  );
}