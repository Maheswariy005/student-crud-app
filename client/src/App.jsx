import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/api/message")
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <div>
            <h1>MERN Application</h1>
            <h2>{message}</h2>
        </div>
    );
}

export default App;