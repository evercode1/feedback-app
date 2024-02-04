import './App.css'
import {useState} from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/feedbackData'


function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  if ( ! feedback || feedback.length === 0 ) { 

    return (

    <>

    <Header />
    
     <p>No Feedback yet</p>   

    </>

    )
  
  }

  return (
    <>
      
      <Header />

      <div className="container">

      <FeedbackList feedback={feedback} />
        
      
        </div>

      

    </>

  )

}

export default App
