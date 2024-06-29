import './question.css'
const Question = () => {
  return (
    <section className="question">
        <div className="col-1">
            <h2 className='question__content q1'>You Have Questions?</h2>
            <h2 className='question__content q2'>We Have Answers!</h2>
        </div>
        <div className="col-2">
            <button className='submit--question'>Submit Your Question</button>
        </div>
    </section>
  )
}

export default Question