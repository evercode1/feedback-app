import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    
    const [feedback, setFeedback] = useState([
        
        {

            id: 1,
            text: "This is feedback Item 1",
            rating: 10

        },

        {

            id: 2,
            text: "This is feedback Item 2",
            rating: 8
    
        },

        {

            id: 3,
            text: "This is feedback Item 3",
            rating: 9
        
        },



    ])

    const [feedbackEdit, setFeedbackEdit] = useState({

        item: {},
        edit: false

    })



    const deleteFeedback = (id) => {

        if (window.confirm('Are you sure?')) {
    
          setFeedback(feedback.filter((item) => item.id !== id))
    
        }
    
    }

    // set item to be updated

    const editFeedback = (item) => {  

        setFeedbackEdit({ item, edit: true })
    }

    // update item

    const updateFeedback = (id, updItem) => {  

        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)))

    }


    const addFeedback = (newFeedback) => { 
    
        newFeedback.id = uuidv4()
    
        setFeedback([newFeedback, ...feedback])
    
    }
    
    
    return (

        <FeedbackContext.Provider 

            value={{ 
            
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback
            
            }}> 
        
            {children} 
        
        </FeedbackContext.Provider>

    )

}

export default FeedbackContext