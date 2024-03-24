import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://alphaedu.portfolio-adilzhexenov.kz/news/${id}`)
      .then(response => response.json())
      .then(data => setArticle(data))
      .catch(error => console.error('Error fetching article:', error));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <p>Author: {article.author}</p>
      <p>Date Published: {article.datePublished}</p>
    </div>
  );
}

export default Article;
