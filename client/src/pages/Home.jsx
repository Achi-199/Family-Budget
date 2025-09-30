import { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [totals, setTotals] = useState({ income: 0, outcome: 0 });

  useEffect(() => {
    fetch('http://localhost:8000/api/totals')
      .then((res) => res.json())
      .then((data) => setTotals(data))
      .catch(console.error);
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to the Family Budget Website</h1>
      <p className="lead">
        Track your income and expenses with ease!
      </p>

      <img
        className="home-banner"
        src="https://media.licdn.com/dms/image/v2/D5612AQHaZvRvRA8XKA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709267761216?e=2147483647&v=beta&t=3gpCeaTaeyQSbxIff2ZG6-s90FjLjtGM6llPfpWBvD4"
        alt="Family budgeting"
      />

      <div className="totals">
        <div className="card income">
          <h3>Total Income</h3>
          <p>${totals.income.toFixed(2)}</p>
        </div>
        <div className="card outcome">
          <h3>Total Outcome</h3>
          <p>${totals.outcome.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
