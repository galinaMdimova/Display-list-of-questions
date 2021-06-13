import React from 'react'
import Question from '../Question/Question'
import dataInput from '../../data/data'

const DisplayQuestions = () => {
   
    return (
        <div>
            {dataInput.map((q) => (
                <Question key={q.id} props={q} />
            ))}
        </div>
    )
}

export default DisplayQuestions