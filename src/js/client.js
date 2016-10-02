import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/application';

require('../css/styles.scss');

const app = document.getElementById('app');

ReactDOM.render(<Application />, app);