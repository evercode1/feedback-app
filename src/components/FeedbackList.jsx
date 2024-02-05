import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback, handleDelete}) {

  return (

    
    <div className="feeback-list">

      <AnimatePresence>

      {feedback.map((item) => (

        <motion.div 
        
          key={item.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          
        >

            <FeedbackItem key={item.id} item ={item} handleDelete={handleDelete} />

        </motion.div>
      
      ))}

      

      </AnimatePresence>

    </div>
  )


  // return (

    
  //   <div className="feeback-list">

  //     {feedback.map((item) => (

  //         <FeedbackItem key={item.id} item ={item} handleDelete={handleDelete} />
      
  //     ))}

  //   </div>
  // )
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
