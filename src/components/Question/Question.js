import React, { useState, useContext } from 'react'
import { AnswerContext } from '../AnswerProvider/AnswerProvider'
import './Question.css'
import ArrowDown from '../Arrow/ArrowDown'

const Question = ({ props }) => {
    const { post, setPost } = useContext(AnswerContext)
    const { title, id, answer } = props
    const [changePadding, setChangePaddind] = useState(false)
    
  
    }
    const handleClick = (event) => {
        event.preventDefault()
        setChangePaddind(changePadding)
        setPost(pid => (pid === id ? -1 : id))
    }

    

    return (
        <>
            <section>
                <h2 onClick={handleClick} style={changePadding} >{title} {id}  </h2>
                {post === id ? <p>{answer}</p> : null}
            </section>
        </>
    )
}



export default  Question