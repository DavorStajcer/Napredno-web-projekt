import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from 'App';

import store from './modules/redux-store/store';
import './index.css';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', render);
}

//axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
