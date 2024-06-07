import React from 'react';

function BlogPost({ title, date, author, imageSrc, alt, body }) {
  return (
    <article className="blog-post">
      <h2>{title}</h2>
      <p className="date">Founded: {date}</p>
      <p className="author">By {author}</p>
      <img src={imageSrc} alt={alt} />
      <p className="body">{body}</p>
      <hr />
    </article>
  );
}

export default BlogPost;
