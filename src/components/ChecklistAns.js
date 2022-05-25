
import React, { Children } from 'react';
import CheckBox from "@site/src/components/CheckBox.js";


export default function CheckListAns({ checkList }) {

  checkList = ["Test1", "Tes2"]
  const answer = 1
  let checkBoxList = checkList.map(check => <CheckBox title={check} />)
  const  [userResponse, setUserResponse] = useState([]);

  const toggleAnswer = (answers) => {
    // What you want to do here is to change. The adaaptability with 
    

    // If on the list then mark it as not on the list. 

  }



  return (
    <div> 
      {checkBoxList}
    </div>
  );
}