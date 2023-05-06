import React from 'react';
import { Link } from 'react-router-dom';

function NotMatch() {
  return (
    <main>
      <h2>Page not Found!</h2>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </main>
  );
}

export default NotMatch;
