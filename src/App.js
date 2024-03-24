import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импортируем Routes вместо Switch
import Home from './Home';
import Article from './Article';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Routes> {}
        <Route exact path="/" element={<Home />} /> {}
        <Route path="/article/:id" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
