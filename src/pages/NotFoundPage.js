import React from 'react';
import ReactDOM from 'react-dom/client';

import ErrorMessage from '../components/ErrorMessage';

import * as bootstrap from 'bootstrap';
import '../assets/scss/core/external/bootstrap-custom.scss';
import '../assets/scss/app.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorMessage title='404' message='Page Not Found' />);