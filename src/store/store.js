import { createStore, combineReducers } from "redux";

import * as reducers from "./reducers";

const rootReducers = combineReducers(reducers);
const store = createStore(rootReducers);

export default store;
