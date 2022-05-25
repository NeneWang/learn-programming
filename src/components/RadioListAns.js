
import React, { useState } from 'react';
import RadioAns from "@site/src/components/RadioAns.js";


export default function CheckListAns({ checkList, answer }) {
  const [userResponse, setUserResponse] = useState("");
  const [submitted, setSubmitted] = useState(false)

  // checkList = ["Test12", "Tes2"]
  // const answer = 1
  const uniqueIdentifier = checkList[0];

  const toggleAnswer = (answerByUser) => {
    // What you want to do here is to change. The adaaptability with 

    // If on the list then mark it as not on the list. 
    setUserResponse(answerByUser)
    // console.log(userResponse)
    setSubmitted(false)
  }


  let checkBoxList = checkList.map(check => <RadioAns radio={"uniqueIdentifier"} title={check} toggleAnswer={toggleAnswer} />)
  // const [stateChecklist,setStateChecklist] = useState(checkBoxList)

  const submitHandle = () => {
    setSubmitted(true)
  }

  const isAnswerCorrect = () => {
    return userResponse == checkList[answer - 1]
  }

  const tryAgain = () => {
    setUserResponse(answer)
    setSubmitted(false)
  }

  return (
    <div>

      {submitted ? isAnswerCorrect() ? `Correct 🎉 - Answer is: ${userResponse}` : ` Incorrect answer` : ""}
      
      {checkBoxList}

      <div><button onClick={submitHandle} >Check answer</button></div>
      {/* {submitted ? isAnswerCorrect() ? `Congrats 🎉 - Answer is: ${userResponse}` : <div> Incorrect answer - You can <button className='' onClick={tryAgain} >Try Again</button></div> : ""} */}


    </div>
  );
}