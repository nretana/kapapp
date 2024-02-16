import React from 'react';
import ReactDOM from 'react-dom/client';

import Layout from '../components/UI/Layout';
import Home from '../components/Home';
import ErrorBoundary from '../components/ErrorBoundary';

import { AppContextProvider } from '../store/app-context';

import * as bootstrap from 'bootstrap';
import '../assets/scss/core/external/bootstrap-custom.scss';
import '../assets/scss/app.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider>
        <ErrorBoundary>
            <Layout pageClass="home-content">
                <Home />
            </Layout>
        </ErrorBoundary>
    </AppContextProvider>
)