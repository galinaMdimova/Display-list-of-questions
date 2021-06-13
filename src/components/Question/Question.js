import React, {useContext } from 'react'
import { AnswerContext } from '../AnswerProvider/AnswerProvider'
import './Question.css'
import ArrowDown from '../Arrow/ArrowDown'

const Question = ({ props }) => {
    const { post, setPost } = useContext(AnswerContext)
    const { title, id, answer } = props
   
    const handleClick = (event) => {
        event.preventDefault()
        setPost(pid => (pid === id ? -1 : id))
    }

    return (
        <>
            <section>
                <h2 onClick={handleClick}>{title} {id}</h2>
                {post === id ? <p>{answer}</p> : null}
            </section>
        </>
    )
}
    
export default  Question