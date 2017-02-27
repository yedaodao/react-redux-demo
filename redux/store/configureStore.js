import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const middlewares = [thunk];

// if (process.env.NODE_ENV === `development`) {
//     const createLogger = require(`redux-logger`);
//     const logger = createLogger();
//     middlewares.push(logger);
// }

export default function configureCinderStore(preloadedState) {
    return createStore(
        reducers,
        preloadedState,
        applyMiddleware(...middlewares)
    );
}
