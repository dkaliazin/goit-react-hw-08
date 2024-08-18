import React from 'react';
import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css'
export default function NotFoundPage() {
    return (
        <div className={css.container}>
            <h1 className={css.header}>404 PAGE NOT FOUND</h1>
            <Link to="/">Go to Home</Link>
        </div>
    );
}