import './headers.css'

const Heading = ({ headingSpan, headingTitle }) => {
  return (
    <div className="heading__container">
        <span className="heading__span">{headingSpan}</span>
        <h2 className='heading__title'>{headingTitle}</h2>
    </div>
  )
}

export default Heading