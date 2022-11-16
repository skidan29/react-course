
import './App.css';
import {useState} from "react";


function App() {

    const [value, setValue] = useState('placeholder')


    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong>JS</strong>
                </div>
                <div className="post__btn">
                    <button>Read</button>
                </div>
            </div>
        </div>
    );
}

export default App;
