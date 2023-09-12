import { useState } from 'react';

export default function SentMessage() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');

    const sendMessage = (message) => {
        try {
            console.log(`${message}`);
        } catch (e) {
            console.error(e);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(message);
        setIsSent(true);
        setMessage('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>

            {isSent && <p id='message'>Message sent!</p>}
        </div>
    );
}