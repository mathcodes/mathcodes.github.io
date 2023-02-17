import React, { useState, useEffect } from 'react';


function MediumFeed() {

  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jcircle9')
      .then(resp => resp.json())
      .then(data => {
        setBlogs(data.items)
      })
  }, [])

  console.log(blogs)
  return (
    <div className="App">
      <h1>My Blogs</h1>
      {blogs.map(blog => {
        return <div>
          <h1>{blog.title}</h1>
          <img src={blog.thumbnail} alt={blog.title} /><br />
          <a href={blog.link} target="_blank" rel="noopener noreferrer">View Blog Post</a>
{categories.map(category => {
  return <span className="bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70">{category}</span>
}
)}
        </div>
      })}
    </div>
  );
}

export default MediumFeed;