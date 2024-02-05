import Card from './shared/Card'
import { useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import {useState} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    useEffect(() => {  
        
        if(feedbackEdit.edit === true) {

            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)

        }

    }, [feedbackEdit])

    const handleTextChange = (e) => {  

        if (text === '') {

            setBtnDisabled(true)
            setMessage(null)

        } else if (text !== '' && text.trim().length < 10) {

            setBtnDisabled(false)
            setMessage('Your review must be at least 10 characters long')

        } else {

            setBtnDisabled(false)
            setMessage(null)
        }
        
        setText(e.target.value)

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        if ( text.trim().length >= 10 ) {

           const newFeedback = {

            text,
            rating,

           }

           if (feedbackEdit.edit === true) {

            updateFeedback(feedbackEdit.item.id, newFeedback)

            setBtnDisabled(true)



            

           } else {


            addFeedback(newFeedback)

            setText('')
            
           }

           

        }    

    }

    return (

        <Card>

            <form onSubmit={handleSubmit} className="form">

                <h2>How would you rate your service with us?</h2>

                <RatingSelect select={(rating) => setRating(rating)} />   

                <div className="input-group">

                    <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />

                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>

                </div>

                {message && <div className="message">{message}</div>}

            </form>
      
        </Card>

    )

}

export default FeedbackForm
