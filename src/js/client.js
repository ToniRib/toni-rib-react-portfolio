import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/application';
import 'bootstrap/dist/css/bootstrap.css';

require('../css/styles.scss');

const app = document.getElementById('app');

ReactDOM.render(<Application />, app);