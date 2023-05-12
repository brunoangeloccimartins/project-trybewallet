import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly"
import { applyMiddleware, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"

// configure aqui sua store
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))