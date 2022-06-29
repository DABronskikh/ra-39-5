import React from 'react'
import Message from "./Message";

export default function ErrorMessage(props) {
    const base = {
        type: 'error',
    };
    const newProps = {...props, ...base};

    return <Message {...newProps} />;
}
