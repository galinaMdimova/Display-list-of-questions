import React, { useState, useContext } from 'react'
import { AnswerContext } from '../AnswerProvider/AnswerProvider'
import ArrowDown from '../Arrow/ArrowDown'
import './Question.css'
import styled from "styled-components"
import pointer from '../../img/hand-pointer-solid.svg'

const Heading = styled.h2`
padding: ${props => props.alt ? "1.5em" : "1em"};
background-color: #f4f4f4;
text-align: start;
cursor: url(${pointer}), auto;

&:hover {
    background-color:#ececec;     
}
`
const Question = ({ props }) => {
    const { post, setPost } = useContext(AnswerContext)
    const { title, id, answer } = props
    const [isShown, setIsShown] = useState(false)

    const handleClick = (event) => {
        event.preventDefault()
        setPost(pid => (pid === id ? -1 : id))
        setIsShown(!isShown)    
    }

    return (
        <>
            <section className="section">
                <Heading alt={isShown}
                    onClick={handleClick}>
                    {title} {id}
                    <ArrowDown
    
                        width={20}
                        fill={'#eee'}
                    />
                </Heading>
                {post === id ? <p>{answer}</p> : null}
            </section>
        </>
    )
}

export default Question