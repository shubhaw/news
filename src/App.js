import React from 'react';
import axios from "../src/axios-config";
import './App.css';

const App = () => {
    React.useEffect(() => {
        // axios.get("top-headlines?country=us")
        //     .then(response => console.log(response))
        //     .catch(err => console.log(err));
    }, []);
    return <h1>News App - Developed by Shubhaw</h1>
}

export default App;
