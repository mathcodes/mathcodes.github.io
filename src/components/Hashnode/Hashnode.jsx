import React, { useState, useEffect } from 'react';
import parseString from 'xml2js';

const Hashnode = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jonchristie.hashnode.dev/rss.xml?page=1');
        const data = await response.text();
        parseString(data, (err, result) => {
          if (err) {
            console.error(err);
          } else {
            setArticles(result.rss.channel[0].item);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        // <div key={article.guide}>
          <h2>{article.title}</h2>
          // <p>{article.description}</p>
          // <p>
          //   <a href={article.link}>Read more</a>
          // </p>
        // </div>
      ))}
    </div>
  );
};

export default Hashnode;
