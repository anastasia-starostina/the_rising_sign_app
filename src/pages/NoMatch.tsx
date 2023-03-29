import React from 'react';
import { Link } from 'react-router-dom';

function NotMatch() {
  return (
    <div>
      <h2>Page not Found!</h2>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}

export default NotMatch;
