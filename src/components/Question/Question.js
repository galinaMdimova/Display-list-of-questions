import React, { useState, useContext } from 'react'
import { AnswerContext } from '../AnswerProvider/AnswerProvider'
import ArrowDown from '../Arrow/ArrowDown'
import  './Question.css'

const Question = ({ props }) => {
    const { post, setPost } = useContext(AnswerContext)
    const { title, id, answer } = props
    const [selected, setSelected] = useState(null)

    const handleClick = (event) => {
        event.preventDefault()
        setPost(pid => (pid === id ? -1 : id))   
    }

    return (
        <>
            <section className="section">
                <h2 className="question" onClick={handleClick}>{title} {id}</h2>
                {post === id ? <p>{answer}</p> : null}
            </section>
        </>
    )
}
    
export default  Question