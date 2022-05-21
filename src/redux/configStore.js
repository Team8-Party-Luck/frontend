import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import user from "./modules/user";
import crew from "./modules/crew";
import alarm from "./modules/alarm";
import chat from "./modules/chat";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: user,
  crew: crew,
  alarm: alarm,
  chat: chat,
  router: connectRouter(history),
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk.withExtraArgument({ history: history })];

// 지금이 어느 환경인 지 줌. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 로거
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// let store = (initialStore) => createStore(rootReducer, enhancer);
let store = (initialStore) => createStore(persistedReducer, enhancer);

export default store();
