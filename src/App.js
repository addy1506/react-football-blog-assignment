import React from 'react';
import Header from './Header';
import BlogPost from './BlogPost';
import './style.css'; // Import your CSS file

function App() {
  return (
    <div>
      <Header />
      <main>
        <BlogPost
          title="FC Barcelona"
          date="Nov 29, 1899"
          author="Football Enthusiast"
          imageSrc="assests/FC_Barcelona_(crest).svg.png"
          alt="FC Barcelona"
          body="Futbol Club Barcelona, commonly referred to as Barcelona and colloquially known as Barça, is a professional football club based in Barcelona, Catalonia, Spain. It is one of the most famous and successful football clubs in the world."
        />
        <BlogPost
          title="Manchester United"
          date=" Aug 14 1878"
          author="Football Fanatic"
          imageSrc="assests/images (1).png"
          alt="FC Barcelona"
          body="Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England, that competes in the Premier League, the top flight of English football."
        />
        <BlogPost
          title="Borussia Dortmund"
          date="Founded: Dec 19, 1909"
          author="Football Enthusiast"
          imageSrc="assests/images.png"
          alt="FC Barcelona"
          body="Futbol Club Barcelona, commonly referred to as Barcelona and colloquially known as Barça, is a professional football club based in Barcelona, Catalonia, Spain. It is one of the most famous and successful football clubs in the world."
        />
        {/* Repeat BlogPost component for other posts */}
      </main>
    </div>
  );
}

export default App;
