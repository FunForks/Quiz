const Answers = (props) => {
  const { 
    question, // integer number of the current question
    answers,  // an array of { answer: <String>, correct: <Boolean> }
    select,   // a function to call when an answer is pressed
    selected  // the text of the selected answer after Check Answer
  } = props



  // Prepare to prevent the player from changing their answer
  // after the correct answer has been revealed
  const activeClass = selected
  ? "disabled"
  : ""



  const answerItems = answers.map(( answerData, index ) => {
    const { answer, correct } = answerData
    const id = `q${question}a${index}`

    let answerClass // may be undefined, "right" or "wrong"
    if (selected) { // the player clicked Check Answer
      if (correct) { // correct answer may be in any position
        answerClass = "right"
      } else if (selected === answer) {
        answerClass = "wrong"
      }
    }


    return (
      <li
        key={id}
      >
        <input
          id={id}
          type="radio"
          name="answer"
          onChange={() => select(answer)}
        />
        <label
          htmlFor={id}
          className={answerClass}
        >  
           {answer}
        </label>
      </li>
    )
  })


  return (
    <ul
      id="answers"
      className={activeClass}
    >
      {answerItems}
    </ul>
  )
}


export default Answers