import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you’re looking for doesn’t exist.</p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default NotFound;