import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigator from './layout/navi';
import Main from './layout/main';
import Footer from './layout/foot';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navigator />, document.getElementById('navigator'));
ReactDOM.render(<Main />, document.getElementById('main'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

serviceWorker.unregister();
