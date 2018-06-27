import { createStore } from 'redux';
import * as data from '../data'

const store = createStore(data.reducers.rootReducer);

export default store;
