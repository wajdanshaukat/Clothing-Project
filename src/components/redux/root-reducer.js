import userReducer from "./user/userReducer";
// import cartReducer from "./cart/cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;