import { createStore, combineReducers } from "redux";
import themeReducer from "./reducers";
import fontReducer from "./fontReducer";

// Set up a general reducer.
const rootReducer = combineReducers({
  theme: themeReducer,
  fontSize: fontReducer
});

// Create a store with the reducer.
const configureStore = () => {
  return createStore(rootReducer);
};

// Export the configured store
export default configureStore;
