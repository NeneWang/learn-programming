
import React, { useState } from 'react';
import CheckBoxAns from "@site/src/components/CheckboxAns.js";


export default function CheckListAns({ checkList }) {
  const [userResponse, setUserResponse] = useState("");
  const [submitted, setSubmitted] = useState(false)

  checkList = ["Test12", "Tes2"]
  const answer = 1
  const uniqueIdentifier = "item-x1";

  const toggleAnswer = (answerByUser) => {
    // What you want to do here is to change. The adaaptability with 

    // If on the list then mark it as not on the list. 
    setUserResponse(answerByUser)
    // console.log(userResponse)
  }


  let checkBoxList = checkList.map(check => <CheckBoxAns radio={uniqueIdentifier} title={check} toggleAnswer={toggleAnswer} />)


  const submitHandle = () => {
    setSubmitted(true)
  }

  const isAnswerCorrect = () => {
    return userResponse == checkList[answer - 1]
  }

  const tryAgain = () => {
    setUserResponse("")
    setSubmitted(false)
  }

  return (
    <div>

      {submitted ? isAnswerCorrect() ? `Congrats 🎉 - Answer is: ${userResponse}` : <div> Incorrect answer - You can <button className='' onClick={tryAgain} >Try Again</button></div> : ""}
      {userResponse[checkList[0]] ? checkBoxList : ""}
      {checkBoxList}

      <div><button onClick={submitHandle} >Submit</button></div>
    </div>
  );
}