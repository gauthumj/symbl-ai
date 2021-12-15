import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState({});
    const getData = async () => {
        const response = await axios.get(
            "https://61b6f23ec95dd70017d410f8.mockapi.io/data/data"
        );
        // .then((res) => {
        //     const myData = res.data;
        //     console.log(myData);
        //     setData(myData);
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
        const myData = response.data;
        console.log(myData);
        setData(myData);
    };

    useEffect(() => getData(), []);
    console.log(data["data"]);
    return (
        <div className="App">
            {data["data"]
                .sort((a, b) => a.id - b.id)
                .map((item) => {
                    return (
                        <ol>
                            <li>
                                {item.id} - {item.name}
                            </li>
                        </ol>
                    );
                })}
        </div>
    );
}

export default App;
