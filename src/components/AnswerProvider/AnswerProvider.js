import React, { useState, createContext } from 'react'

export const AnswerContext = createContext(-1)

function AnswerProvider({ children }) {
  const [ post, setPost ] = useState(-1)

  return (
    <AnswerContext.Provider value={{ post, setPost }}>
      {children}
    </AnswerContext.Provider>
  )
}

export default AnswerProvider

