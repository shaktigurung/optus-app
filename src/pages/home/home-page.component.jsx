import React from 'react';

import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="App">
            <div className="jumbotron">
                <h1 className="display-4"> Welcome to Home Page !</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility class for typography and spacing to space content out within the larger container.</p>
                <Link to="/" className="btn btn-info btn-lg" role="button">Learn more</Link>
            </div>
        </div>
    )
}

export default HomePage;