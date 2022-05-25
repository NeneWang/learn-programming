
import React, { useState } from 'react';
import CheckBoxAns from "@site/src/components/CheckBoxAns.js";


export default function CheckListAns({ checkList }) {

  checkList = ["Test1", "Tes2"]
  const answer = 1
  let checkBoxList = checkList.map(check => <CheckBoxAns title={check} />)
  const [userResponse, setUserResponse] = useState(checkList.map(checkItem => { checkItem: false }));
  const [submitted, setSubmitted] = useState(false)
  const toggleAnswer = (answer) => {
    // What you want to do here is to change. The adaaptability with 

    // If on the list then mark it as not on the list. 
    setUserResponse(!userResponse[answer])
  }

  const submitHandle = () => {
    setSubmitted(true)
  }

  const isAnswerCorrect = () => {
    return userResponse[checkList[answer - 1]]
  }

  return (
    <div>

      {submitted ? isAnswerCorrect() ? "Congrats 🎉" : "Try Again" : ""}
      {userResponse[checkList[0]] ? checkBoxList : ""}
      {checkBoxList}

      <div><button onClick={submitHandle} >Submit</button></div>
    </div>
  );
}