// import { createLogger } from 'redux-logger'
// import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../src/reducers'
// import { syncHistoryWithStore } from 'react-router-redux'
// import { hashHistory } from 'react-router'
// import promise from 'redux-promise-middleware'

// const loggerMiddleware = createLogger()

// const middleware = [promise(), thunk]

// if (process.env.NODE_ENV === `development`) {
//     const { logger } = require(`redux-logger`);

//     middleware.push(logger);
// }

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

export default store