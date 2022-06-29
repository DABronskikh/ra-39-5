import Message from "./components/Message";

function App() {
    const message = {
        type: 'info',
        text: 'Информационное сообщение'
    };

    return (
        <div className="container">

            <Message {...message}/>

            <Message
                type="error"
                icon="/path/to/error.png"
                position="topright"
                timeout="60"
                priority="100"
                text="Пароли не совпадают"
            />


        </div>
    );
}

export default App;
