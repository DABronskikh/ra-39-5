import React from 'react'

export default function Message() {

    return (
        <div className={`message message-${props.type}`}>
            {props.text}
        </div>
    )

}
