import React from 'react';
import { Link } from 'react-router-dom';
import ErrorPieChart from '../Components/ErrorPieChart';

/**
 * Component page that displays error page
 * @component
 */

const Error = () => {
    return (
        <div className="error-content">
            <ErrorPieChart />
            <Link to="/">Retour à la page d'accueil</Link>
        </div>
    );
};

export default Error;