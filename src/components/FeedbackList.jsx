import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {

  const { feedback } = useContext(FeedbackContext)

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

            <FeedbackItem key={item.id} item ={item} />

        </motion.div>
      
      ))}

      

      </AnimatePresence>

    </div>
  )

}




export default FeedbackList
