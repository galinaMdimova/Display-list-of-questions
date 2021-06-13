import DisplayQuestions from './components/DisplayQuestions/DisplayQuestions'
import AnswerProvider from './components/AnswerProvider/AnswerProvider'
import './App.css'

export default function App() {
  return (
     <AnswerProvider>
      <div className="container">
        <h1>Frequntly asked questions</h1>
        <p>Hello! Didn't find what you are looking for? Please contact us.</p>
        <DisplayQuestions />
      </div>
      </AnswerProvider>  
  )
}


