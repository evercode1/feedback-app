import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback, handleDelete}) {


  return (

    
    <div className="feeback-list">

      {feedback.map((item) => (

          <FeedbackItem key={item.id} item ={item} handleDelete={handleDelete} />
      
      ))}

    </div>
  )
}

FeedbackList.proptypes = {

  feedback: PropTypes.arrayOf(


    PropTypes.shape({   

        id: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired

    })

  )}


export default FeedbackList
