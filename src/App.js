import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://61b6f23ec95dd70017d410f8.mockapi.io/data/data")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.data);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ol className="gradient-list">
                {items
                    .sort((a, b) => a.id - b.id)
                    .map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
            </ol>
        );
    }
}

export default App;
