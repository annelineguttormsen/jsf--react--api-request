import React, { useState, useEffect } from 'react';

export default function NewsArticleList() {
  const [state, setState] = useState({
    articles: []
  });

  useEffect(
    function() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(articles => setState({
          articles: articles
        }))
    }, []
  );

  return (
    <ul>
      {
        state.articles
          .map(article => <li key={article.id}>{article.title}</li>)
      }
    </ul>
  );
}