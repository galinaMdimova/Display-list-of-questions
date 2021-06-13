import React from 'react'

const ArrowUp = (props) => {
    return (

<svg
    className={props.className}
    height={props.height}
    width={props.width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#000000">
    <path
        d="M0 0h24v24H0V0z"
        fill={props.fill}
    />
    <path
        d="M7 14l5-5 5 5H7z"
    />
</svg>
    )
}

export default ArrowUp