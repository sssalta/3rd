import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://alphaedu.portfolio-adilzhexenov.kz/news')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div>
      <h1>Новости</h1>
      <ul>
        {articles.map(article => (
          <li key={article._id}>
            <Link to={`/article/${article._id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
