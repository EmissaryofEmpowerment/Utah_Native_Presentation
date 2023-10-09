import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div>
            Now caught client working
            {/* <Routes>
                <Route path="/client_show_scores" element={<ClientShowScores/>}></Route>
                <Route path="/start_game" element={<GameStart/>} ></Route>
                <Route exact path="/" element={<Login />} ></Route> 
                
            </Routes> */}
        </div>
    );
}

// defines root
const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);