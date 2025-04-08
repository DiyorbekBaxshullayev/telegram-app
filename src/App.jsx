import React, { useEffect } from 'react';
import Home from './Home.jsx';

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;

    tg.ready(); // Telegramga frontend tayyorligini bildiramiz

    tg.expand(); // Mini App ekranini to‘liq kengaytiradi
  }, []);

  return <Home />;
}

export default App;
