import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import CoinsList from './components/CoinsList';
import CoinCharts from './components/CoinCharts';
import CoinDetails from './components/CoinDetails';

const App: React.FC = () => {
    return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="/" className="navbar-brand">
                        NetData Coins App
                    </a>
                </nav>

                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<CoinsList/>} />
                        <Route path="/coins/:id/market_chart" element={<CoinCharts/>} />
                        <Route path="/coins/:id" element={<CoinDetails/>} />
                    </Routes>
                </div>
            </div>
            );
}

export default App;
