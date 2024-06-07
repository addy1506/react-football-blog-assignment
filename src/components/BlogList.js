// src/components/BlogList.js
import React from 'react';
import BlogPost from './BlogPost';
import '../style.css';

const BlogList = () => {
    const blogs = [
        {
            title: 'FC Barcelona',
            date: 'November 29, 1899',
            author: 'Football Enthusiast',
            image: '/assets/FC_Barcelona_(crest).svg.png',
            body: 'Futbol Club Barcelona, commonly referred to as Barcelona and colloquially known as Barça, is a professional football club based in Barcelona, Catalonia, Spain. It is one of the most famous and successful football clubs in the world.'
        },
        {
            title: 'Manchester United',
            date: '1878',
            author: 'Football Fanatic',
            image: '/assets/images.png',
            body: 'Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England, that competes in the Premier League, the top flight of English football.'
        },
        {
            title: 'Borussia Dortmund',
            date: 'December 19, 1909',
            author: 'Soccer Lover',
            image: '/assets/images (1).png',
            body: 'Ballspielverein Borussia 09 e.V. Dortmund, commonly known as Borussia Dortmund, BVB, or simply Dortmund, is a German professional sports club based in Dortmund, North Rhine-Westphalia.'
        }
    ];

    return (
        <main>
            {blogs.map((blog, index) => (
                <BlogPost
                    key={index}
                    title={blog.title}
                    date={blog.date}
                    author={blog.author}
                    image={blog.image}
                    body={blog.body}
                />
            ))}
        </main>
    );
};

export default BlogList;
