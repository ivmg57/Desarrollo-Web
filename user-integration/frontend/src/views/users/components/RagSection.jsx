import { useState } from 'react';

const RagSection = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const handleMessageChange = (e) => {
        setCurrentMessage(e.target.value);
    };

    const handleSendMessage = async () => {
        if (!currentMessage) {
            alert('Por favor, escribe un mensaje.');
            return;
        }

        const userMessage = { role: 'user', content: currentMessage };
        setMessages([...messages, userMessage]);

        try {
            const res = await fetch('http://localhost:3000/chat/context', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: currentMessage }),
            });

            const data = await res.json();

            if (data) {
                const botMessage = { role: 'bot', content: data };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            } else {
                const errorMessage = { role: 'bot', content: 'No se pudo obtener una respuesta.' };
                setMessages((prevMessages) => [...prevMessages, errorMessage]);
            }
        } catch (error) {
            console.error('Error al obtener respuesta:', error);
            const errorMessage = { role: 'bot', content: 'Error al obtener respuesta.' };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }

        setCurrentMessage('');
    };

    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', padding: '20px', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
            <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Chat Interactivo: Criterios Diagnósticos DSM-5</h3>
            <div style={{ flex: 1, overflowY: 'auto', marginBottom: '20px', padding: '10px', border: '1px solid #399C7E', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
                {messages.map((message, index) => (
                    <div key={index} style={{ textAlign: message.role === 'user' ? 'right' : 'left' }}>
                        <p style={{ backgroundColor: message.role === 'user' ? '#dcf8c6' : '#ffffff', display: 'inline-block', padding: '10px', borderRadius: '10px', maxWidth: '70%' }}>
                            {message.content}
                        </p>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex' }}>
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={currentMessage}
                    onChange={handleMessageChange}
                    style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #399C7E', marginRight: '10px' }}
                />
                <button
                    onClick={handleSendMessage}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#399C7E',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        borderRadius: '5px',
                    }}
                >
                    Enviar
                </button>
            </div>
        </div>
    );
};

export default RagSection;
